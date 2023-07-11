import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Track } from "../tracks/tracks.model";
import { ApiProperty } from "@nestjs/swagger";

interface AlbumCreationAttrs {
  title: string;
  image: string;
  author: string;
}

@Table({ tableName: "albums" })
export class Album extends Model<Album, AlbumCreationAttrs> {
  @ApiProperty({ example: 1, description: "ID сущности" })
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER, unique: true })
  id: number;

  @ApiProperty({ example: "Спи", description: "Название альбома" })
  @Column({ type: DataType.STRING(100), allowNull: false })
  title: string;

  @ApiProperty({ example: "03444cc8-4512-4feb-a4c7-b2765d38ba35.jpg", description: "Название файла на сервере" })
  @Column({ type: DataType.STRING(100), allowNull: false })
  image: string;

  @ApiProperty({ example: "Алёна Швец", description: "Автор(ы) альбома" })
  @Column({ type: DataType.STRING(150), allowNull: false })
  author: string;

  @HasMany(() => Track)
  tracks: Track[];
}