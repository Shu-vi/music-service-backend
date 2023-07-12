import { Injectable } from "@nestjs/common";
import { CreateTrackDto } from "./dto/create-track.dto";
import { Track } from "./tracks.model";
import { InjectModel } from "@nestjs/sequelize";
import { FileService } from "../file/file.service";

@Injectable()
export class TracksService {
  constructor(
    @InjectModel(Track) private trackRepository: typeof Track,
    private fileService: FileService) {
  }

  async createTrack(trackDto: CreateTrackDto, track) {
    const fileName = await this.fileService.createFile(track, "track");
    return await this.trackRepository.create({ ...trackDto, source: fileName });
  }
}
