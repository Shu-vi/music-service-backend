import { IsNumber, IsString, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePlaylistDto {
  @ApiProperty({ example: "Для занятия спортом", description: "Название плейлиста" })
  @IsString({ message: "Дожно быть строкой" })
  title: string;

  @ApiProperty({ example: 1, description: "ID пользователя" })
  @IsNumber({}, { message: "Должно быть числом" })
  userId: number;
}