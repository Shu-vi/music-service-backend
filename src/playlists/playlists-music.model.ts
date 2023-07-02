import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Track } from "../tracks/tracks.model";
import { Playlist } from "./playlists.model";

@Table({tableName: 'playlist_musics', updatedAt: false, createdAt: false})
export class PlaylistsMusic extends Model<PlaylistsMusic>{
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @ForeignKey(() => Track)
  @Column({type: DataType.INTEGER})
  trackId: number;
  @ForeignKey(() => Playlist)
  @Column({type: DataType.INTEGER})
  playlistId: number;
}
