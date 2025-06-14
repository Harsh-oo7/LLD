import { Light } from "./light";
import { LightOffCommand } from "./light-off-command";
import { LightOnCommand } from "./light-on-command";
import { RemoteControl } from "./remote-controller";

export class CommandExample {
    demonstrate() {
        const light = new Light();
        const lightOn = new LightOnCommand(light);
        const lightOff = new LightOffCommand(light);

        const remote = new RemoteControl();

        remote.setCommand(lightOn);
        remote.pressButton(); // Light is ON

        remote.setCommand(lightOff);
        remote.pressButton(); // Light is OFF

    }
}