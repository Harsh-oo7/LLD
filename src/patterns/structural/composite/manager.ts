import { Employee } from "./employee-interface";

export class Manager implements Employee {
    private subordinates: Employee[] = [];
  
    constructor(private name: string) {}
  
    add(employee: Employee): void {
      this.subordinates.push(employee);
    }
  
    showDetails(indent = ""): void {
      console.log(`${indent}+ Manager: ${this.name}`);
      for (const emp of this.subordinates) {
        emp.showDetails(indent + "  ");
      }
    }
}
  