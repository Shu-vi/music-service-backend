import { Module } from "@nestjs/common";
import { TracksService } from "./tracks.service";
import { TracksController } from "./tracks.controller";
import { FileModule } from "../file/file.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { Track } from "./tracks.model";
import { GenresModule } from "../genres/genres.module";

@Module({
  providers: [TracksService],
  controllers: [TracksController],
  imports: [
    SequelizeModule.forFeature([Track]),
    FileModule,
    GenresModule
  ],
  exports: [TracksService]
})
export class TracksModule {
}
