import { OffState } from "./off-state";
import { FanState } from "./state-interface";

export class FanContext {
    private state: FanState;
  
    constructor() {
      this.state = new OffState(); // Initial state
    }
  
    setState(state: FanState): void {
      this.state = state;
    }
  
    pressButton(): void {
      this.state.pressButton(this);
    }
}
  