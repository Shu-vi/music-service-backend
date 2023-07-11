import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreatePlaylistDto } from "./dto/create-playlist.dto";
import { PlaylistsService } from "./playlists.service";
import { Role } from "../roles/roles.model";
import { GetRolesDto } from "../users/dto/get-roles.dto";
import { Playlist } from "./playlists.model";

@ApiTags("Плейлисты")
@Controller("playlists")
export class PlaylistsController {

  constructor(private playlistService: PlaylistsService) {
  }

  //TODO добавление музыки в плейлист

  //TODO удаление музыки из плейлиста

  @ApiOperation({ summary: "Создание плейлиста" })
  @ApiResponse({ status: 200, type: Playlist })
  @ApiBody({ type: CreatePlaylistDto })
  @Post("/")
  createPlaylist(@Body() playlistDto: CreatePlaylistDto) {
    return this.playlistService.create(playlistDto);
  }
}
