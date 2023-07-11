import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as path from "path";
import * as fs from "fs";
import * as uuid from "uuid";

@Injectable()
export class FileService {
  async createFile(file, type: "album" | "track"): Promise<string> {
    try {
      const fileName = uuid.v4() + (type === "album" ? ".jpg" : ".mp4");
      const filePath = path.resolve(__dirname, "..", "..", "static", type);
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      return fileName;
    } catch (e) {
      throw new HttpException("Произошла ошибка при записи файла", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
