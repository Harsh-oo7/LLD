import { Command } from "./command";

export class RemoteControl {
    private command!: Command;
  
    setCommand(command: Command): void {
      this.command = command;
    }
  
    pressButton(): void {
      this.command.execute();
    }
}
