import { ChatMediator } from "./chat-mediator";
import { User } from "./user";

export class ChatRoom implements ChatMediator {
    private users: User[] = [];
  
    registerUser(user: User): void {
      this.users.push(user);
    }
  
    sendMessage(message: string, sender: User): void {
      for (const user of this.users) {
        if (user !== sender) {
          user.receive(`${sender.getName()} says: ${message}`);
        }
      }
    }
}
  