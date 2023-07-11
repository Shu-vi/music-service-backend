import { Module } from "@nestjs/common";
import { AlbumsController } from "./albums.controller";
import { AlbumsService } from "./albums.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Album } from "./albums.model";
import { FileModule } from "../file/file.module";

@Module({
  controllers: [AlbumsController],
  providers: [AlbumsService],
  imports: [
    SequelizeModule.forFeature([Album]),
    FileModule
  ]
})
export class AlbumsModule {
}
