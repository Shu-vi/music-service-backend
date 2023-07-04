import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { RolesService } from "./roles.service";

@Controller('roles')
export class RolesController {

  constructor(private roleService: RolesService) {}

  //Работает
  @Post('/')
  create(@Body() roleDto: CreateRoleDto) {
    return this.roleService.createRole(roleDto);
  }

  //Работает
  @Get('/')
  getAll() {
    return this.roleService.getAllRoles();
  }
}
