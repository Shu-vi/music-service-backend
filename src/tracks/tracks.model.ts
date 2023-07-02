import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { DislikeTrack } from "./dislike-tracks.model";
import { User } from "../users/users.model";
import { LikeTrack } from "./like-tracks.model";
import { Playlist } from "../playlists/playlists.model";
import { PlaylistsMusic } from "../playlists/playlists-music.model";
import { Genre } from "../genres/genres.model";
import { TrackGenres } from "./track-genres.model";

interface TracksCreationAttrs {
  title: string;
  source: string;
}

@Table({tableName: 'tracks'})
export class Track extends Model<Track, TracksCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @Column({type: DataType.STRING(100), allowNull: false})
  title: string;
  @Column({type: DataType.STRING(100), allowNull: false})
  source: string;
  @BelongsToMany(() => User, () => DislikeTrack)
  users: User[];
  @BelongsToMany(() => User, () => LikeTrack)
  users2: User[];
  @BelongsToMany(() => Playlist, () => PlaylistsMusic)
  playlist: Playlist[];
  @BelongsToMany(() => Genre, () => TrackGenres)
  genres: Genre[];
}