import { FileAccess } from "./file-access-interface";

export class RealFileAccess implements FileAccess {
    readFile(): void {
      console.log("Reading file...");
    }
  
    deleteFile(): void {
      console.log("File deleted!");
    }
}
  