import { Module } from "@nestjs/common";
import { PlaylistsController } from "./playlists.controller";
import { PlaylistsService } from "./playlists.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Playlist } from "./playlists.model";

@Module({
  controllers: [PlaylistsController],
  providers: [PlaylistsService],
  exports: [PlaylistsService],
  imports: [SequelizeModule.forFeature([Playlist])]
})
export class PlaylistsModule {
}
