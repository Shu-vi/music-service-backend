import { Injectable } from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  createUser(userDto: CreateUserDto) {
    return {id: 1, name: 'val'}
  }
}
