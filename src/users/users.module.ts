import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from "./users.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { RolesModule } from "../roles/roles.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User]),
    RolesModule
  ]
})
export class UsersModule {}
