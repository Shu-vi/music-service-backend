import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";
import { Genre } from "./genres.model";

@Table({ tableName: "users_favourites_genres", createdAt: false, updatedAt: false })
export class UsersFavouritesGenres extends Model<UsersFavouritesGenres> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Genre)
  @Column({ type: DataType.INTEGER })
  genreId: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;
}