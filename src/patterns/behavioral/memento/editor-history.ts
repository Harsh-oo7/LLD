import { EditorMemento } from "./editor-memento";

export class EditorHistory {
    private history: EditorMemento[] = [];
  
    push(memento: EditorMemento): void {
      this.history.push(memento);
    }
  
    pop(): EditorMemento | undefined {
      return this.history.pop();
    }
}
