import { User } from "./user";

export interface ChatMediator {
    sendMessage(message: string, sender: User): void;
}
  