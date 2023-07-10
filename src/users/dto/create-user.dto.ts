import { IsEmail, IsString, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "Иван", description: "Имя" })
  @IsString({ message: "Должно быть строкой" })
  @Length(2, 32, { message: "Длина от 2 до 32" })
  readonly name: string;

  @ApiProperty({ example: "Иванов", description: "Фамилия" })
  @IsString({ message: "Должно быть строкой" })
  @Length(2, 32, { message: "Длина от 2 до 32" })
  readonly surname: string;

  @ApiProperty({ example: "test@gmail.com", description: "Электронная почта" })
  @IsString({ message: "Должно быть строкой" })
  @IsEmail({}, { message: "Некорректный email" })
  readonly email: string;

  @ApiProperty({ example: "SjgiQ73.sF%saf.", description: "Пароль" })
  @IsString({ message: "Должно быть строкой" })
  @Length(2, 24, { message: "Длина от 5 до 24" })
  readonly password: string;
}