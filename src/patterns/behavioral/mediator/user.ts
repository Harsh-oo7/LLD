import { ChatMediator } from "./chat-mediator";

export class User {
    constructor(private name: string, private mediator: ChatMediator) {}
  
    send(message: string): void {
      console.log(`${this.name} sends: "${message}"`);
      this.mediator.sendMessage(message, this);
    }
  
    receive(message: string): void {
      console.log(`${this.name} receives: "${message}"`);
    }
  
    getName(): string {
      return this.name;
    }
}
  