import { IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LikeTrackDto {
  @ApiProperty({ example: 123, description: "ID трека" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly trackId: number;

  @ApiProperty({ example: 5432, description: "ID пользователя" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly userId: number;
}