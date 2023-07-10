import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { RolesService } from "./roles.service";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AddRoleDto } from "../users/dto/add-role.dto";
import { Role } from "./roles.model";

@ApiTags("Роли")
@Controller("roles")
export class RolesController {

  constructor(private roleService: RolesService) {
  }

  @ApiOperation({ summary: "Создать роль" })
  @ApiResponse({ status: 200, type: Role })
  @ApiBody({ type: CreateRoleDto })
  @Post("/")
  create(@Body() roleDto: CreateRoleDto) {
    return this.roleService.createRole(roleDto);
  }

  @ApiOperation({ summary: "Получить все существующие роли" })
  @ApiResponse({ status: 200, type: [Role] })
  @Get("/")
  getAll() {
    return this.roleService.getAllRoles();
  }
}
