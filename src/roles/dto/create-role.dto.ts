import { IsString, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({ example: "subadmin", description: "Название роли" })
  @IsString({ message: "Должно быть строкой" })
  @Length(4, 32, { message: "Длина от 4 до 32" })
  readonly title: string;
}
