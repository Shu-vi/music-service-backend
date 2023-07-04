import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { SetGenresDto } from "./dto/set-genres.dto";

@Controller('/users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Post('/')
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto)
  }

  @Post('/set-genres')
  setGenres(@Body() genresDto: SetGenresDto) {
    return this.usersService.setGenres(genresDto);
  }
}
