import { ChatRoom } from "./chat-room";
import { User } from "./user";

export class MediatorExample {
    demonstrate() {
        const chatRoom = new ChatRoom();

        const alice = new User("Alice", chatRoom);
        const bob = new User("Bob", chatRoom);
        const charlie = new User("Charlie", chatRoom);

        chatRoom.registerUser(alice);
        chatRoom.registerUser(bob);
        chatRoom.registerUser(charlie);

        alice.send("Hello everyone!");
        bob.send("Hi Alice!");

    }
}
