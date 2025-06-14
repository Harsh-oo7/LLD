import { Command } from "./command";
import { Light } from "./light";

export class LightOnCommand implements Command {
    constructor(private light: Light) {}
  
    execute(): void {
      this.light.turnOn();
    }
}