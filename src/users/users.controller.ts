import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { SetGenresDto } from "./dto/set-genres.dto";
import { AddRoleDto } from "./dto/add-role.dto";
import { GetRolesDto } from "./dto/get-roles.dto";
import { User } from "./users.model";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { CreatePlaylistDto } from "./dto/create-playlist.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@ApiTags("Пользователи")
@Controller("/users")
export class UsersController {

  constructor(private usersService: UsersService) {
  }

  @ApiOperation({ summary: "Регистрация пользователя" })
  @ApiResponse({ status: 200, type: User })
  @ApiBody({ type: CreateUserDto })
  @Post("/")
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({
    summary: "Задать любимые жанры пользователя",
    description: "Перезаписывает предыдущие любимые жанры. Поэтому если необходимо добавить новый любимый жанр, то нужно отправить и предыдущие любимые жанры пользователя"
  })
  @ApiResponse({ status: 200, type: SetGenresDto })
  @ApiBody({ type: SetGenresDto })
  @Post("/genres")
  setGenres(@Body() genresDto: SetGenresDto) {
    return this.usersService.setGenres(genresDto);
  }

  @ApiOperation({ summary: "Выдать роль пользователю" })
  @ApiResponse({ status: 200, type: AddRoleDto })
  @ApiBody({ type: AddRoleDto })
  @Post("/roles")
  addRole(@Body() roleDto: AddRoleDto) {
    return this.usersService.addRole(roleDto);
  }

  //TODO Создание плейлиста

  //TODO Удаление плейлиста

  //TODO получение всех ролей пользователя
  @ApiOperation({ summary: "Получить роли пользователя" })
  @ApiResponse({ status: 200, type: [Role] })
  @ApiBody({ type: GetRolesDto })
  @Get("/roles")
  getRoles(@Body() rolesDto: GetRolesDto) {
    return this.usersService.getUserRoles(rolesDto.email);
  }
}
