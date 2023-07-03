import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { RolesService } from "../roles/roles.service";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User,
              private roleService: RolesService) {}
  async createUser(userDto: CreateUserDto) {
    let user = await this.userRepository.findOne({where: {email: userDto.email}});
    if (user) {
      throw new HttpException({codeError: 1, message: 'Пользователь с таким email уже существует', secretMessage: ''}, HttpStatus.BAD_REQUEST);
    }
    const role = await this.roleService.getRoleByTitle("user");
    if (!role) {
      throw new HttpException({codeError: 2, message: 'Невозможно зарегистрироваться из-за внутренней ошибки сервера', secretMessage: 'Роли user не существует'}, HttpStatus.BAD_REQUEST);
    }
    user = await this.userRepository.create(userDto);
    await user.$set('roles', [role.id]);
    user.roles = [role];
    return user;
  }
}
