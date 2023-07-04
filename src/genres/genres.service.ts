import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Genre } from "./genres.model";

@Injectable()
export class GenresService {

  constructor(@InjectModel(Genre) private genreRepository: typeof Genre) {}

  async createGenre(genreDto: CreateGenreDto) {
    const genre = await this.getGenreByTitle(genreDto.title);
    if (genre) {
      throw new HttpException({codeError: 4, message: 'Невозможно создать жанр, такой жанр уже существует', secretMessage: ''}, HttpStatus.BAD_REQUEST);
    }
    return await this.genreRepository.create(genreDto);
  }

  async getGenreByTitle(title: string) {
    return await this.genreRepository.findOne({where: {title}})
  }

  async getAllGenres() {
    return await this.genreRepository.findAll();
  }
}
