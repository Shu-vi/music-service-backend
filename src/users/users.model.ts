import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";
import { Genre } from "../genres/genres.model";
import { UsersFavouritesGenres } from "../genres/users-favourites-genres.model";
import { Playlist } from "../playlists/playlists.model";
import { Track } from "../tracks/tracks.model";
import { DislikeTrack } from "../tracks/dislike-tracks.model";
import { LikeTrack } from "../tracks/like-tracks.model";

interface UserCreationAttrs {
  name: string;
  surname: string;
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @Column({type: DataType.STRING(32), allowNull: false})
  name: string;
  @Column({type: DataType.STRING(32), allowNull: false})
  surname: string;
  @Column({type: DataType.STRING(32), unique: true, allowNull: false})
  email: string;
  @Column({type: DataType.STRING(24), allowNull: false})
  password: string;
  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
  @BelongsToMany(() => Genre, () => UsersFavouritesGenres)
  genres: Genre[];
  @HasMany(() => Playlist)
  playlists: Playlist[];
  @BelongsToMany(() => Track, () => DislikeTrack)
  tracks: Track[];
  @BelongsToMany(() => Track, () => LikeTrack)
  tracks2: Track[];
}