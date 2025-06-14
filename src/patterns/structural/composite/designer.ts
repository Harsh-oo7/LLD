import { Employee } from "./employee-interface";

export class Designer implements Employee {
    constructor(private name: string) {}
  
    showDetails(indent = ""): void {
      console.log(`${indent}- Designer: ${this.name}`);
    }
}