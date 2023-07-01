import { Column, DataType, Model, Table } from "sequelize-typescript";

interface GenresCreationAttrs {
  title: string;
}

@Table({tableName: 'genres'})
export class Genre extends Model<Genre, GenresCreationAttrs> {
  @Column({primaryKey: true, autoIncrement: true, type: DataType.INTEGER, unique: true})
  id: number;
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  title: string;
}