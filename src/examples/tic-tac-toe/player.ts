export class Player {
    private name: string;
    private id: number;
    private ranking: number;
    private playerSymbol: string;


    setPlayerName(name: string) {
        this.name = name;
    }

    setPlayerId(id: number) {
        this.id = id;
    }
    
    setPlayerSymbol(symbol: string) {
        this.playerSymbol = symbol;
    }

    getPlayerName(): string {
        return this.name;
    }

    getPlayerSymbol(): string {
        return this.playerSymbol;
    }

    getPlayerId(): number {
        return this.id;
    }

    getPlayerRanking(): number {
        return this.ranking;
    }
    
}