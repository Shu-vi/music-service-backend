import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AlbumsService } from "./albums.service";
import { CreateAlbumDto } from "./dto/create-album.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Album } from "./albums.model";

@ApiTags("Альбомы")
@Controller("albums")
export class AlbumsController {

  constructor(private albumService: AlbumsService) {
  }

  @ApiOperation({ summary: "Создать альбом" })
  @ApiResponse({ status: 200, type: Album })
  @ApiBody({ type: CreateAlbumDto, description: "Помимо этих полей необходимо передать изображение" })
  @UseInterceptors(FileInterceptor("image"))
  @Post("/")
  create(@Body() dto: CreateAlbumDto, @UploadedFile() image) {
    return this.albumService.create(dto, image);
  }

  //TODO удалить, редактировать альбом

  //TODO добавить трек в альбом

  //TODO удалить трек из альбома
}
