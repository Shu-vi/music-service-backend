import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import * as process from "process";
import { User } from "./users/users.model";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { Genre } from "./genres/genres.model";
import { UsersFavouritesGenres } from "./genres/users-favourites-genres.model";
import { Playlist } from "./playlists/playlists.model";
import { DislikeTrack } from "./tracks/dislike-tracks.model";
import { Track } from "./tracks/tracks.model";
import { LikeTrack } from "./tracks/like-tracks.model";
import { PlaylistsMusic } from "./playlists/playlists-music.model";
import { TrackGenres } from "./tracks/track-genres.model";
import { Album } from "./albums/albums.model";
import { PlaylistsModule } from "./playlists/playlists.module";
import { FileModule } from "./file/file.module";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env"
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      models: [User, Role, UserRoles, Genre, UsersFavouritesGenres, Playlist, DislikeTrack, Track, LikeTrack, PlaylistsMusic, TrackGenres, Album],
      autoLoadModels: true
    }),
    UsersModule
  ],
  exports: []
})
export class AppModule {
}