import { IsString, Length } from "class-validator";

export class CreateRoleDto {
  @IsString({message: 'Должно быть строкой'})
  @Length(4, 32, {message: 'Длина от 4 до 32'})
  readonly title: string;
}
