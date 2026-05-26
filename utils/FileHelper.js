import fs from "fs";

class FileHelper {
  static readJson(filePath) {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  }
}

export default FileHelper;
