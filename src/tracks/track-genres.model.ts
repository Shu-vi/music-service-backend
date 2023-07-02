import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";
import { Track } from "./tracks.model";
import { Genre } from "../genres/genres.model";

@Table({tableName: 'track-genres', updatedAt: false, createdAt: false})
export class TrackGenres extends Model<TrackGenres> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @ForeignKey(() => Track)
  @Column({type: DataType.INTEGER})
  trackId: number;
  @ForeignKey(() => Genre)
  @Column({type: DataType.INTEGER})
  genreId: number;
}