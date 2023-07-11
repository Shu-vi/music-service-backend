import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAlbumDto {
  @ApiProperty({ example: "Animal", description: "Название альбома" })
  @IsString({ message: "Должно быть строкой" })
  readonly title: string;

  @ApiProperty({ example: "Jim Yosef, RIELL", description: "Автор(ы) альбома" })
  @IsString({ message: "Должно быть строкой" })
  readonly author: string;
}