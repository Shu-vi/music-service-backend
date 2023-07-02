import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";
import { PlaylistsMusic } from "./playlists-music.model";
import { Track } from "../tracks/tracks.model";

interface PlaylistsCreationAttrs {
  title: string;
  image: string;
  userId: number;
}

@Table({tableName: 'playlists'})
export class Playlist extends Model<Playlist, PlaylistsCreationAttrs>{
  @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true})
  id: number;
  @Column({type: DataType.STRING(40), allowNull: false})
  title: string;
  @Column({type: DataType.STRING(100), allowNull: false, unique: true})
  image: string;
  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;
  @BelongsTo(() => User)
  user: User;
  @BelongsToMany(() => Track, () => PlaylistsMusic)
  tracks: Track[];
}