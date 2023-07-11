import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";
import { PlaylistsMusic } from "./playlists-music.model";
import { Track } from "../tracks/tracks.model";
import { ApiProperty } from "@nestjs/swagger";

interface PlaylistsCreationAttrs {
  title: string;
  userId: number;
}

@Table({ tableName: "playlists" })
export class Playlist extends Model<Playlist, PlaylistsCreationAttrs> {
  @ApiProperty({ example: 1, description: "ID сущности плейлиста" })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true })
  id: number;

  @ApiProperty({ example: "Для занятия спортом", description: "Название плейлиста" })
  @Column({ type: DataType.STRING(40), allowNull: false })
  title: string;

  @ApiProperty({ example: 1242, description: "ID пользователя, которому принадлежит плейлист" })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsToMany(() => Track, () => PlaylistsMusic)
  tracks: Track[];
}