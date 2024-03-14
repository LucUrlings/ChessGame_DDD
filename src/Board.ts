import {Piece} from "./Piece";

export class Board {
    private squares: { [file: string]: { [rank: number]: Piece | null } };

    constructor() {
        this.squares = {};

        for (let file = 'a'; file <= 'h'; file = String.fromCharCode(file.charCodeAt(0) + 1)) {
            this.squares[file.toUpperCase()] = {};
            for (let rank = 1; rank <= 8; rank++) {
                this.squares[file.toUpperCase()][rank] = null;
            }
        }
    }

    public placePiece(piece: Piece, file: string, rank: number): void {
        this.squares[file.toUpperCase()][rank] = piece;
    }

    private getPieceAt(file, rank) {
        const piece = this.squares[file][rank];

        if (!piece) {
            throw new Error("No piece at the specified location.");
        }

        return piece
    }

    private isCellOccupied(file, rank) {
        const piece = this.squares[file][rank];

        return !!piece
    }

    movePiece(fromFile: string, fromRank: number, toFile: string, toRank: number): void {
        const piece = this.squares[fromFile][fromRank];

        if (!piece) {
            throw new Error("No piece at the specified location.");
        }

        if (!piece.isValidMove(fromFile, fromRank, toFile, toRank)) {
            throw new Error("Piece cannot make this move")
        }

        if (!this.isPathClear(fromFile, fromRank, toFile, toRank)) {
            throw new Error("Cant make that move as a piece is in the way")
        }

        // Actually move the piece
        this.squares[toFile][toRank] = piece
        this.squares[fromFile][fromRank] = null

        console.log(this.squares)
    }

    private isPathClear(fromFile: string, fromRank: number, toFile: string, toRank: number): boolean {
        const dFile = Math.sign(toFile.charCodeAt(0) - fromFile.charCodeAt(0));
        const dRank = Math.sign(toRank - fromRank);

        let file = fromFile;
        let rank = fromRank;

        while (file !== toFile || rank !== toRank) {
            file = String.fromCharCode(file.charCodeAt(0) + dFile);
            rank += dRank;

            if (this.isCellOccupied(file, rank)) {
                return false;
            }
        }

        return true;
    }
}