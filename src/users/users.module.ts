import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { User } from "./users.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { RolesModule } from "../roles/roles.module";
import { Genre } from "../genres/genres.model";
import { UsersFavouritesGenres } from "../genres/users-favourites-genres.model";
import { GenresModule } from "../genres/genres.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Genre, UsersFavouritesGenres]),
    RolesModule,
    GenresModule
  ]
})
export class UsersModule {
}
