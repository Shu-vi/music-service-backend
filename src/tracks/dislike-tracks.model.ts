import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";
import { Track } from "./tracks.model";
import { ApiProperty } from "@nestjs/swagger";

@Table({ tableName: "dislike_tracks", updatedAt: false, createdAt: false })
export class DislikeTrack extends Model<DislikeTrack> {
  @ApiProperty({ example: 3, description: "ID сущности" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 532, description: "ID пользователя, который ставит дизлайк на трек" })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ApiProperty({ example: 3251, description: "ID трека, на который ставят дизлайк" })
  @ForeignKey(() => Track)
  @Column({ type: DataType.INTEGER })
  trackId: number;
}