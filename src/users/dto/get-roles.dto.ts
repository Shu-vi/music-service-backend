import { IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class GetRolesDto {
  @ApiProperty({ example: "test@gmail.com", description: "Электронная почта" })
  @IsEmail({}, { message: "Должно быть email" })
  readonly email: string;
}