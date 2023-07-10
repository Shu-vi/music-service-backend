import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";
import { Track } from "./tracks.model";

@Table({ tableName: "dislike_tracks", updatedAt: false, createdAt: false })
export class DislikeTrack extends Model<DislikeTrack> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ForeignKey(() => Track)
  @Column({ type: DataType.INTEGER })
  trackId: number;
}