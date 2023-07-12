import { Module } from "@nestjs/common";
import { TracksService } from "./tracks.service";
import { TracksController } from "./tracks.controller";
import { FileModule } from "../file/file.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { Track } from "./tracks.model";

@Module({
  providers: [TracksService],
  controllers: [TracksController],
  imports: [
    SequelizeModule.forFeature([Track]),
    FileModule
  ],
  exports: [TracksService]
})
export class TracksModule {
}
