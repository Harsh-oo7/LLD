import { Dice } from "./dice";
import { GameBoard } from "./game-board";
import { Jumper } from "./jumper";
import { Player } from "./player";
import { Queue } from "../../queue";

export class PlayGame {
    play() {
        const dice = new Dice(6);
        const p1 = new Player("Harsh", 1);
        const p2 = new Player("Smit", 2);
        const p3 = new Player("Deep", 3);

        const playersQueue = new Queue<Player>();
        playersQueue.enqueue(p1);
        playersQueue.enqueue(p2);
        playersQueue.enqueue(p3);

        const snake1: Jumper = new Jumper(10, 2);
        const snake2: Jumper = new Jumper(19, 7);

        const ladder1: Jumper = new Jumper(3, 22);
        const ladder2: Jumper = new Jumper(5, 8);
        const ladder3: Jumper = new Jumper(11, 26);
        const ladder4: Jumper = new Jumper(20, 29);

        const snakes: Jumper[] = [snake1, snake2];
        const ladders: Jumper[] = [ladder1, ladder2, ladder3, ladder4];

        const playersCurrentPosition: Map<string, number> = new Map();
        playersCurrentPosition.set(p1.getName(), 0);
        playersCurrentPosition.set(p2.getName(), 0);
        playersCurrentPosition.set(p3.getName(), 0);

        const gameBoard = new GameBoard(dice, playersQueue, snakes, ladders, 30, playersCurrentPosition);
        gameBoard.startGame();

    }

}
