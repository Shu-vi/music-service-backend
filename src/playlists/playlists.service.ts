import { Injectable } from "@nestjs/common";
import { CreatePlaylistDto } from "./dto/create-playlist.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Playlist } from "./playlists.model";

@Injectable()
export class PlaylistsService {
  constructor(@InjectModel(Playlist) private playlistRepository: typeof Playlist) {
  }

  create(dto: CreatePlaylistDto) {
    return this.playlistRepository.create(dto);
  }
}
