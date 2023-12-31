import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateTrackDto } from "./dto/create-track.dto";
import { Track } from "./tracks.model";
import { InjectModel } from "@nestjs/sequelize";
import { FileService } from "../file/file.service";
import { LikeTrackDto } from "./dto/like-track.dto";
import { DislikeTrackDto } from "./dto/dislike-track.dto";
import { DislikeTrack } from "./dislike-tracks.model";
import { LikeTrack } from "./like-tracks.model";
import { SetGenreDto } from "./dto/set-genre.dto";
import { GenresService } from "../genres/genres.service";

@Injectable()
export class TracksService {
  constructor(
    @InjectModel(Track) private trackRepository: typeof Track,
    private fileService: FileService,
    private genreService: GenresService) {
  }

  async createTrack(trackDto: CreateTrackDto, track) {
    const fileName = await this.fileService.createFile(track, "track");
    return await this.trackRepository.create({ ...trackDto, source: fileName });
  }

  async likeTrack(dto: LikeTrackDto) {
    const dislike = await this.getDislike(dto);
    if (dislike) {
      await dislike.destroy();
    }
    const like = await this.getLike(dto);
    if (like) {
      return await like.destroy();
    } else {
      return await LikeTrack.create({ userId: dto.userId, trackId: dto.trackId });
    }
  }

  async dislikeTrack(dto: DislikeTrackDto) {
    const like = await this.getLike(dto);
    if (like) {
      await like.destroy();
    }
    const dislike = await this.getDislike(dto);
    if (dislike) {
      return await dislike.destroy();
    } else {
      return await DislikeTrack.create({ userId: dto.userId, trackId: dto.trackId });
    }
  }

  async getLike(likeTrackDto: LikeTrackDto) {
    const { userId, trackId } = likeTrackDto;
    return await LikeTrack.findOne({ where: { userId, trackId } });
  }

  async getDislike(dislikeTrackDto: DislikeTrackDto) {
    const { userId, trackId } = dislikeTrackDto;
    return await DislikeTrack.findOne({ where: { userId, trackId } });
  }

  async setGenre(setGenreDto: SetGenreDto) {
    const genre = await this.genreService.getGenreById(setGenreDto.genreId);
    if (!genre) {
      throw new HttpException({
        codeError: 6,
        message: `Жанра не существует`,
        secretMessage: `Жанра с ID ${setGenreDto.genreId} не существует`
      }, HttpStatus.BAD_REQUEST);
    }
    const track = await this.trackRepository.findOne({ where: { id: setGenreDto.trackId } });
    if (!track) {
      throw new HttpException({
        codeError: 9,
        message: `Трека не существует`,
        secretMessage: `Трека с ID ${setGenreDto.trackId} не существует`
      }, HttpStatus.BAD_REQUEST);
    }
    await track.$set("genres", genre)
    return setGenreDto;
  }
}
