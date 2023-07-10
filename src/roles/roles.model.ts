import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";
import { UserRoles } from "./user-roles.model";
import { ApiProperty } from "@nestjs/swagger";

interface RoleCreationAttrs {
  title: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "user", description: "Название роли" })
  @Column({ type: DataType.STRING(40), unique: true, allowNull: false })
  title: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}