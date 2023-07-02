import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { DislikeTrack } from "./dislike-tracks.model";
import { User } from "../users/users.model";

interface TracksCreationAttrs {
  title: string;
  source: string;
}

@Table({tableName: 'tracks'})
export class Track extends Model<Track, TracksCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @Column({type: DataType.STRING, allowNull: false})
  title: string;
  @Column({type: DataType.STRING, allowNull: false})
  source: string;
  @BelongsToMany(() => User, () => DislikeTrack)
  users: User[];
}