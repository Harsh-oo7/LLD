import { EditorMemento } from "./editor-memento";

export class TextEditor {
    private content: string = "";
  
    type(text: string): void {
      this.content += text;
    }
  
    getContent(): string {
      return this.content;
    }
  
    save(): EditorMemento {
      return new EditorMemento(this.content);
    }
  
    restore(memento: EditorMemento): void {
      this.content = memento.content;
    }
}
  