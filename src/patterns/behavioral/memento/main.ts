import { EditorHistory } from "./editor-history";
import { TextEditor } from "./text-editor";

export class MementoExample {
    demonstrate() {
        const editor = new TextEditor();
        const history = new EditorHistory();

        editor.type("Hello");
        history.push(editor.save());

        editor.type(" World!");
        history.push(editor.save());

        editor.type(" Extra text...");
        console.log(editor.getContent()); // Hello World! Extra text...

        editor.restore(history.pop()!);
        console.log(editor.getContent()); // Hello World!

        editor.restore(history.pop()!);
        console.log(editor.getContent()); // Hello

    }
}
