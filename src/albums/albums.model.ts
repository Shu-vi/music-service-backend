import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Playlist } from "../playlists/playlists.model";
import { Track } from "../tracks/tracks.model";

interface AlbumCreationAttrs {
  title: string;
  image: string;
  author: string;
}

@Table({tableName: 'albums'})
export class Album extends Model<Album, AlbumCreationAttrs> {
  @Column({primaryKey: true, autoIncrement: true, type: DataType.INTEGER, unique: true})
  id: string;
  @Column({type: DataType.STRING(100), allowNull: false})
  title: string;
  @Column({type: DataType.STRING(100), allowNull: false})
  image: string;
  @Column({type: DataType.STRING(150), allowNull: false})
  author: string;
  @HasMany(() => Track)
  tracks: Track[];
}