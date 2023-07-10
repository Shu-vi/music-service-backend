import { Module } from "@nestjs/common";
import { GenresService } from "./genres.service";
import { GenresController } from "./genres.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Genre } from "./genres.model";

@Module({
  providers: [GenresService],
  controllers: [GenresController],
  imports: [SequelizeModule.forFeature([Genre])],
  exports: [GenresService]
})
export class GenresModule {
}
