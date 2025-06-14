export class Circle {
    constructor(private color: string) {}
  
    draw(x: number, y: number, radius: number) {
      console.log(
        `Drawing a ${this.color} circle at (${x}, ${y}) with radius ${radius}`
      );
    }
}
