export class Burger {
    private ingredients: string[] = [];
  
    addIngredient(ingredient: string): void {
      this.ingredients.push(ingredient);
    }
  
    show(): void {
      console.log("Burger with:", this.ingredients.join(", "));
    }
}
