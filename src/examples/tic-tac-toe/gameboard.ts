import * as readline from 'readline';
import { Queue } from "../../queue";
import { Player } from "./player";

export class GameBoard {
    private board: string[][];
    private boardSize: number;
    private nextTurn: Queue<Player>;
    private rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

    constructor(boardSize: number, players: Player[]) {
        this.boardSize = boardSize;
        this.board = Array.from({ length: (2 * boardSize) - 1 }, () =>
            Array((2 * boardSize) - 1).fill(' ')
          );
        this.initializeBoard(this.board);  
        this.nextTurn = new Queue<Player>();
        this.nextTurn.enqueue(players[0]);
        this.nextTurn.enqueue(players[1]);
    }

    private initializeBoard(board: string[][]) {
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[0].length;j++){
                if(i%2==0 && j%2!=0) board[i][j] = '|';
                if(i%2!=0 && j%2==0) board[i][j] = '-';
                if(i%2!=0 && j%2 !=0) board[i][j] = '+';
            }
        }
    }
    /*
         | |
        -+-+-
         | |
        -+-+-
         | |
    */

    public printBoard() {
        for(let i=0;i<this.board.length;i++){
            for(let j=0;j<this.board[0].length;j++){
                process.stdout.write(this.board[i][j]);
            }
            console.log();
        }
    }

    async startGame(): Promise<void> {
        let count = 0;
        while (true) {
          count++;
          if (count === (this.boardSize * this.boardSize) + 1) {
            console.log("Match draw");
            break;
          }
    
          const player = this.nextTurn.dequeue()!;
          const position = await this.getUserInput(player);
    
          const row = 2 * ((position % this.boardSize === 0)
            ? (position / this.boardSize) - 1
            : Math.floor(position / this.boardSize));
          const col = 2 * (((position % this.boardSize === 0)
            ? this.boardSize
            : position % this.boardSize) - 1);
    
          this.board[row][col] = player.getPlayerSymbol();
          this.printBoard();
          console.log("Board after the move");
    
          if (count >= this.boardSize && this.checkEndGame(player, row, col)) {
            break;
          }
    
          this.nextTurn.enqueue(player);
        }
    
        this.rl.close();
      }
    
      private async getUserInput(player: Player): Promise<number> {
        this.printBoard();
        const maxVal = this.boardSize * this.boardSize;
    
        const ask = (question: string): Promise<string> =>
          new Promise(resolve => this.rl.question(question, resolve));
    
        let val = parseInt(await ask(`${player.getPlayerName()}, enter a number (1-${maxVal}): `));
    
        while (!this.validateInput(val)) {
          this.printBoard();
          val = parseInt(await ask(`Invalid! ${player.getPlayerName()}, try again (1-${maxVal}): `));
        }
    
        return val;
      }
    
      private validateInput(val: number): boolean {
        if (val < 1 || val > (this.boardSize * this.boardSize)) return false;
    
        const row = 2 * ((val % this.boardSize === 0)
          ? (val / this.boardSize) - 1
          : Math.floor(val / this.boardSize));
        const col = 2 * (((val % this.boardSize === 0)
          ? this.boardSize
          : val % this.boardSize) - 1);
    
        return this.board[row][col] === ' ';
      }
    
      private checkEndGame(player: Player, row: number, col: number): boolean {
        const winStr = player.getPlayerSymbol().repeat(this.boardSize);
    
        let rowStr = '';
        let colStr = '';
        let diagStr = '';
        let revDiagStr = '';
    
        for (let i = 0; i < this.board.length; i += 2) {
          rowStr += this.board[row][i];
          colStr += this.board[i][col];
    
          if (row === col) diagStr += this.board[i][i];
          if (row + col === this.board.length - 1) revDiagStr += this.board[this.board.length - 1 - i][i];
        }
    
        if ([rowStr, colStr, diagStr, revDiagStr].includes(winStr)) {
          console.log(`${player.getPlayerName()} has won the game!`);
          return true;
        }
    
        return false;
      }
    
    


}