import { FileAccessProxy } from "./file-access-proxy";

export class ProxyExample {
    demonstrate() {
        const adminAccess = new FileAccessProxy("admin");
        adminAccess.readFile();      // Reading file...
        adminAccess.deleteFile();    // File deleted!

        const guestAccess = new FileAccessProxy("guest");
        guestAccess.readFile();      // Reading file...
        guestAccess.deleteFile();    // Access Denied: Only admin can delete files.

    }
}