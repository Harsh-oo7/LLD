import { Queue } from "../../queue";
import { Dice } from "./dice";
import { Jumper } from "./jumper";
import { Player } from "./player";

export class GameBoard {
    private dice: Dice;
    private nextTurn: Queue<Player>; 
    private snakes: Jumper[];
    private ladders: Jumper[];
    private playersCurrentPosition: Map<string, number>;
    private boardSize: number;

    constructor(dice: Dice, nextTurn: Queue<Player>, snakes: Jumper[], ladders: Jumper[], boardSize: number, playersCurrentPosition: Map<string, number>) {
        this.dice = dice;
        this.nextTurn = nextTurn;
        this.snakes = snakes;
        this.ladders = ladders;
        this.boardSize = boardSize;
        this.playersCurrentPosition = playersCurrentPosition;
    }


    startGame() {
        while (!this.nextTurn.isEmpty()) {
            const currentPlayer: Player | undefined = this.nextTurn.dequeue();
            if (!currentPlayer) {
                continue;
            }
            
            const currentPosition = this.playersCurrentPosition.get(currentPlayer.getName()) ?? 0;
            const diceValue = this.dice.roll();

            const nextCell = currentPosition + diceValue;
            if(nextCell >= this.boardSize) {
                console.log(`${currentPlayer.getName()} has won the game`);
                continue;
            }

            let nextPosition: number = nextCell;
            this.snakes.forEach(snake => {
                if(nextCell === snake.getStart()) {
                    nextPosition = snake.getEnd();
                }
            });

            if(nextPosition !== nextCell) {
                console.log(`${currentPlayer.getName()} Bitten by Snake present at: ${nextCell}`);
            }

            this.ladders.forEach(ladder => {
                if(nextCell === ladder.getStart()) {
                    nextPosition = ladder.getEnd();
                }
            });

            if(nextPosition !== nextCell) {
                console.log(`${currentPlayer.getName()} got ladder present at: ${nextCell}`);
            }

            if(nextPosition === this.boardSize) {
                console.log(`${currentPlayer.getName()} has won the game`);
                continue;
            }

            this.playersCurrentPosition.set(currentPlayer.getName(), nextPosition);
            console.log(`${currentPlayer.getName()} is at position: ${nextPosition}`);
            this.nextTurn.enqueue(currentPlayer);
        }
    }
}
