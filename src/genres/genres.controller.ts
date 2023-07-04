import { Body, Controller, Get, Post } from "@nestjs/common";
import { GenresService } from "./genres.service";
import { CreateGenreDto } from "./dto/create-genre.dto";

@Controller('genres')
export class GenresController {

  constructor(private genreService: GenresService) {}

  //Работает
  @Post('/')
  createGenre(@Body() genreDto: CreateGenreDto) {
    return this.genreService.createGenre(genreDto);
  }

  //Работает
  @Get('/')
  getAll() {
    return this.genreService.getAllGenres();
  }
}
