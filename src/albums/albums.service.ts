import { Injectable } from "@nestjs/common";
import { CreateAlbumDto } from "./dto/create-album.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Album } from "./albums.model";
import { FileService } from "../file/file.service";

@Injectable()
export class AlbumsService {
  constructor(@InjectModel(Album) private albumRepository: typeof Album,
              private fileService: FileService) {
  }

  async create(dto: CreateAlbumDto, image) {
    const fileName = await this.fileService.createFile(image, "album");
    return await this.albumRepository.create({ ...dto, image: fileName });
  }
}
