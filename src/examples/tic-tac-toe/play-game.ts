import { GameBoard } from "./gameboard";
import { Player } from "./player";

export class PlayGame {
    main() {
        const player1 = new Player();
        const player2 = new Player();
        
        player1.setPlayerName("Player 1");
        player1.setPlayerId(1);
        player1.setPlayerSymbol("X");

        player2.setPlayerName("Player 2");
        player2.setPlayerId(2);
        player2.setPlayerSymbol("O");
        
        const gameBoard = new GameBoard(3, [player1, player2]);
        gameBoard.startGame();
    }
}