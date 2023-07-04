import { IsEmail, IsString } from "class-validator";

export class SetGenresDto {
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;

  @IsString({ message: 'Должно быть строкой' })
  readonly titles: string[];
}