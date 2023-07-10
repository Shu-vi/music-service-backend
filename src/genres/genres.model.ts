import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UsersFavouritesGenres } from "./users-favourites-genres.model";
import { User } from "../users/users.model";
import { TrackGenres } from "../tracks/track-genres.model";
import { Track } from "../tracks/tracks.model";

interface GenresCreationAttrs {
  title: string;
}

@Table({ tableName: "genres", createdAt: false, updatedAt: false })
export class Genre extends Model<Genre, GenresCreationAttrs> {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER, unique: true })
  id: number;

  @Column({ type: DataType.STRING(40), unique: true, allowNull: false })
  title: string;

  @BelongsToMany(() => User, () => UsersFavouritesGenres)
  users: User[];

  @BelongsToMany(() => Track, () => TrackGenres)
  tracks: Track[];
}