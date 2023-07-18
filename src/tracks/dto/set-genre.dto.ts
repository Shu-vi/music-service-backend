import { IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class SetGenreDto {
  @ApiProperty({ example: 325, description: "ID трека" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly trackId: number;

  @ApiProperty({ example: 532, description: "ID жанра" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly genreId: number;
}