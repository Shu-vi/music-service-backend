import { IsString, Length } from "class-validator";

export class CreateGenreDto {
  @IsString({message: 'Должно быть строкой'})
  @Length(3, 40, {message: 'Длина от 3 до 40'})
  readonly title: string;
}