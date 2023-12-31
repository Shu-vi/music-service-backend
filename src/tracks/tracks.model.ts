import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { DislikeTrack } from "./dislike-tracks.model";
import { User } from "../users/users.model";
import { LikeTrack } from "./like-tracks.model";
import { Playlist } from "../playlists/playlists.model";
import { PlaylistsMusic } from "../playlists/playlists-music.model";
import { Genre } from "../genres/genres.model";
import { TrackGenres } from "./track-genres.model";
import { Album } from "../albums/albums.model";
import { ApiProperty } from "@nestjs/swagger";

interface TracksCreationAttrs {
  title: string;
  source: string;
  albumId: number;
}

@Table({ tableName: "tracks" })
export class Track extends Model<Track, TracksCreationAttrs> {
  @ApiProperty({ example: 325, description: "ID сущности" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "Enemy", description: "Название трека" })
  @Column({ type: DataType.STRING(100), allowNull: false })
  title: string;

  @ApiProperty({ example: "62fef31e-bd0f-47f1-b092-3bec81b0ed3f.mp4", description: "Название трека на сервере" })
  @Column({ type: DataType.STRING(100), allowNull: false })
  source: string;

  @BelongsToMany(() => User, () => DislikeTrack)
  users: User[];

  @BelongsToMany(() => User, () => LikeTrack)
  users2: User[];

  @BelongsToMany(() => Playlist, () => PlaylistsMusic)
  playlist: Playlist[];

  @BelongsToMany(() => Genre, () => TrackGenres)
  genres: Genre[];

  @ForeignKey(() => Album)
  @Column({ type: DataType.INTEGER })
  albumId: number;

  @BelongsTo(() => Album)
  album: Album;
}