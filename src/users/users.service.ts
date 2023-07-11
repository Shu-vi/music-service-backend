import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { RolesService } from "../roles/roles.service";
import { SetGenresDto } from "./dto/set-genres.dto";
import { GenresService } from "../genres/genres.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { Role } from "../roles/roles.model";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User,
              private roleService: RolesService,
              private genreService: GenresService) {
  }

  async createUser(userDto: CreateUserDto) {
    let user = await this.getUserByEmail(userDto.email);
    if (user) {
      throw new HttpException({
        codeError: 1,
        message: "Пользователь с таким email уже существует",
        secretMessage: ""
      }, HttpStatus.BAD_REQUEST);
    }
    const role = await this.roleService.getRoleByTitle("user");
    if (!role) {
      throw new HttpException({
        codeError: 2,
        message: "Невозможно зарегистрироваться из-за внутренней ошибки сервера",
        secretMessage: "Роли user не существует"
      }, HttpStatus.BAD_REQUEST);
    }
    user = await this.userRepository.create(userDto);
    await user.$set("roles", [role.id]);
    user.roles = [role];
    return user;
  }

  async setGenres(dto: SetGenresDto) {
    const user = await this.getUserByEmail(dto.email);
    if (!user) {
      throw new HttpException({
        codeError: 5,
        message: "Пользователь с таким email не существует",
        secretMessage: ""
      }, HttpStatus.BAD_REQUEST);
    }
    const genres = [];
    for (const genreDto of dto.titles) {
      const genre = await this.genreService.getGenreByTitle(genreDto);
      if (!genre) {
        throw new HttpException({
          codeError: 6,
          message: `Жанра ${genreDto} не существует`,
          secretMessage: ""
        }, HttpStatus.BAD_REQUEST);
      }
      genres.push(genre);
    }
    await user.$set("genres", [...genres]);
    return dto;
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async getUserRoles(email: string) {
    const user = await User.findOne({
      where: { email: email },
      include: [{ model: Role, through: { attributes: [] } }]
    });
    if (!user) {
      throw new HttpException({
        codeError: 5,
        message: "Пользователь с таким email не существует",
        secretMessage: ""
      }, HttpStatus.BAD_REQUEST);
    }
    return user.roles;
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.getUserByEmail(dto.email);
    if (!user) {
      throw new HttpException({
        codeError: 5,
        message: "Пользователь с таким email не существует",
        secretMessage: ""
      }, HttpStatus.BAD_REQUEST);
    }
    const role = await this.roleService.getRoleByTitle(dto.title);
    if (!role) {
      throw new HttpException({
        codeError: 7,
        message: `Роль ${dto.title} не существует`,
        secretMessage: ""
      }, HttpStatus.BAD_REQUEST);
    }
    const roles = await this.getUserRoles(dto.email);
    roles.forEach(r => {
      if (r.title === role.title) {
        throw new HttpException({
          codeError: 8,
          message: `У пользователя уже есть роль ${role.title}`,
          secretMessage: ""
        }, HttpStatus.BAD_REQUEST);
      }
    });
    await user.$add("roles", role.id);
    return dto;
  }
}