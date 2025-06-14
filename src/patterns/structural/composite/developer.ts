import { Employee } from "./employee-interface";

export class Developer implements Employee {
    constructor(private name: string, private role: string) {}
  
    showDetails(indent = ""): void {
      console.log(`${indent}- ${this.role}: ${this.name}`);
    }
}