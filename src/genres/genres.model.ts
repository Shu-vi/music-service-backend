import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UsersFavouritesGenres } from "./users-favourites-genres.model";
import { User } from "../users/users.model";

interface GenresCreationAttrs {
  title: string;
}

@Table({tableName: 'genres'})
export class Genre extends Model<Genre, GenresCreationAttrs> {
  @Column({primaryKey: true, autoIncrement: true, type: DataType.INTEGER, unique: true})
  id: number;
  @Column({type: DataType.STRING(40), unique: true, allowNull: false})
  title: string;
  @BelongsToMany(() => User, () => UsersFavouritesGenres)
  users: User[];
}