import { Radio } from "./radio";
import { RemoteControl } from "./remote-control";
import { SmartRemote } from "./smart-remote";
import { TV } from "./tv";


export class BridgeExample {
    demonstrate() {
        const tv = new TV();
        const remote = new SmartRemote(tv);

        remote.togglePower();  // TV turned ON
        remote.volumeUp();     // TV volume set to 80%
        remote.mute();         // Muted device

        const radio = new Radio();
        const radioRemote = new RemoteControl(radio);

        radioRemote.togglePower(); // Radio turned ON
        radioRemote.volumeUp();    // Radio volume set to 80%
       
    }
}