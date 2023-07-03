import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto{
  @IsString({message: 'Должно быть строкой'})
  @Length(2, 32, {message: 'Длина от 2 до 32'})
  readonly name: string;
  @IsString({message: 'Должно быть строкой'})
  @Length(2, 32, {message: 'Длина от 2 до 32'})
  readonly surname: string;
  @IsString({message: 'Должно быть строкой'})
  @IsEmail({}, {message: 'Некорректный email'})
  readonly email: string;
  @IsString({message: 'Должно быть строкой'})
  @Length(2, 24, {message: 'Длина от 5 до 24'})
  readonly password: string;
}