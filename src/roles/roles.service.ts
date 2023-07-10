import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./roles.model";

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {
  }

  async createRole(dto: CreateRoleDto) {
    const role = await this.getRoleByTitle(dto.title);
    if (role) {
      throw new HttpException({
        codeError: 3,
        message: "Такая роль уже существует",
        secretMessage: ""
      }, HttpStatus.BAD_REQUEST);
    }
    return await this.roleRepository.create(dto);
  }

  async getRoleByTitle(title: string) {
    return await this.roleRepository.findOne({ where: { title } });
  }

  async getAllRoles() {
    return await this.roleRepository.findAll();
  }
}
