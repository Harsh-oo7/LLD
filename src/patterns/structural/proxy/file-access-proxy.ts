import { FileAccess } from "./file-access-interface";
import { RealFileAccess } from "./real-file-access";

export class FileAccessProxy implements FileAccess {
    private realAccess: RealFileAccess;
    private userRole: string;
  
    constructor(userRole: string) {
      this.userRole = userRole;
      this.realAccess = new RealFileAccess();
    }
  
    readFile(): void {
      this.realAccess.readFile();
    }
  
    deleteFile(): void {
      if (this.userRole === "admin") {
        this.realAccess.deleteFile();
      } else {
        console.log("Access Denied: Only admin can delete files.");
      }
    }
}
  