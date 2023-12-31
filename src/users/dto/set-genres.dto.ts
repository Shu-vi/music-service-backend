import { IsEmail, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class SetGenresDto {
  @ApiProperty({ example: "test@gmail.com", description: "Электронная почта" })
  @IsEmail({}, { message: "Некорректный email" })
  readonly email: string;

  @ApiProperty({ example: ["Рок", "Поп", "Джаз"], description: "Жанры музыки" })
  @IsString({ message: "Должно быть строкой" })
  readonly titles: string[];
}