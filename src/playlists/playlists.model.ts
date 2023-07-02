import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";

interface PlaylistsCreationAttrs {
  title: string;
  image: string;
  userId: number;
}

@Table({tableName: 'playlists'})
export class Playlist extends Model<Playlist, PlaylistsCreationAttrs>{
  @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true})
  id: number;
  @Column({type: DataType.STRING, allowNull: false})
  title: string;
  @Column({type: DataType.STRING, allowNull: false, unique: true})
  image: string;
  @ForeignKey(() => User)
  @Column
  userId: number;
  @BelongsTo(() => User)
  user: User;
}