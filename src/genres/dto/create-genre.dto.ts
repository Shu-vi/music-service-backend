import { IsString, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateGenreDto {
  @ApiProperty({example: "Джаз", description: "Название жанра"})
  @IsString({ message: "Должно быть строкой" })
  @Length(3, 40, { message: "Длина от 3 до 40" })
  readonly title: string;
}