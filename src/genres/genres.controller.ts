import { Body, Controller, Get, Post } from "@nestjs/common";
import { GenresService } from "./genres.service";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Genre } from "./genres.model";

@ApiTags("Жанры")
@Controller("genres")
export class GenresController {

  constructor(private genreService: GenresService) {
  }

  @ApiOperation({ summary: "Создать жанр" })
  @ApiResponse({ status: 200, type: Genre })
  @ApiBody({ type: CreateGenreDto })
  @Post("/")
  createGenre(@Body() genreDto: CreateGenreDto) {
    return this.genreService.createGenre(genreDto);
  }

  @ApiOperation({ summary: "Получить все жанры" })
  @ApiResponse({ status: 200, type: [Genre] })
  @Get("/")
  getAll() {
    return this.genreService.getAllGenres();
  }
}
