import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreateTrackDto } from "./dto/create-track.dto";
import { TracksService } from "./tracks.service";
import { Track } from "./tracks.model";
import { LikeTrackDto } from "./dto/like-track.dto";
import { DislikeTrackDto } from "./dto/dislike-track.dto";
import { LikeTrack } from "./like-tracks.model";
import { DislikeTrack } from "./dislike-tracks.model";
import { SetGenreDto } from "./dto/set-genre.dto";

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

  @ApiOperation({ summary: "Лайкнуть трек" })
  @ApiResponse({ status: 200, type: LikeTrack })
  @ApiBody({
    type: LikeTrackDto,
    description: "Если пользователь имеет лайк на треке, то обращение к end-point'у уберёт лайк. Если пользователь имеет дизлайк на треке, то обращение к end-point'у уберёт дизлайк и поставит лайк"
  })
  @Post("/like")
  likeTrack(@Body() likeTrackDto: LikeTrackDto) {
    return this.trackService.likeTrack(likeTrackDto);
  }

  @ApiOperation({ summary: "Дизлайкнуть трек" })
  @ApiResponse({ status: 200, type: DislikeTrack })
  @ApiBody({
    type: DislikeTrackDto,
    description: "Если пользователь имеет дизлайк на треке, то обращение к end-point'у уберёт дизлайк. Если пользователь имеет лайк на треке, то обращение к end-point'у уберёт лайк и поставит дизлайк"
  })
  @Post("/dislike")
  dislikeTrack(@Body() dislikeTrackDto: DislikeTrackDto) {
    return this.trackService.dislikeTrack(dislikeTrackDto);
  }

  @ApiOperation({ summary: "Добавить треку жанр" })
  @ApiResponse({ status: 200, type: SetGenreDto })
  @ApiBody({
    type: SetGenreDto
  })
  @Post("/genre")
  setGenre(@Body() setGenreDto: SetGenreDto) {
    return this.trackService.setGenre(setGenreDto);
  }
}
