import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTrackDto {
  @ApiProperty({ example: "The Wolven Storm: Priscilla's Son", description: "Название трека" })
  @IsString({ message: "Должно быть строкой" })
  readonly title: string;

  @ApiProperty({ example: 252156, description: "ID альбома, к которому принадлежит трек" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly albumId: number;
}