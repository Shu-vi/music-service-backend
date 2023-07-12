import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreateTrackDto } from "./dto/create-track.dto";
import { TracksService } from "./tracks.service";
import { Album } from "../albums/albums.model";
import { CreateAlbumDto } from "../albums/dto/create-album.dto";
import { Track } from "./tracks.model";

@ApiTags("Треки")
@Controller("tracks")
export class TracksController {
  constructor(private trackService: TracksService) {
  }

  @ApiOperation({ summary: "Создать трек" })
  @ApiResponse({ status: 200, type: Track })
  @ApiBody({ type: CreateTrackDto, description: "Помимо этих полей необходимо передать музыку" })
  @Post("/")
  @UseInterceptors(FileInterceptor("track"))
  createTrack(@Body() trackDto: CreateTrackDto, @UploadedFile() track) {
    return this.trackService.createTrack(trackDto, track);
  }

  //TODO Дизлайк трека

  //TODO Лайк трека

  //TODO добавить треку жанр
}
