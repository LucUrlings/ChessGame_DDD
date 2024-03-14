// Entity
import {PieceType} from "./PieceType";
import {PieceColor} from "./PieceColor";

export class Piece {
    public Color: PieceColor
    public type: PieceType

    constructor(Color: PieceColor, type: PieceType) {
        this.Color = Color;
        this.type = type
    }

    public isValidMove(fromFile: string, fromRank: number, toFile: string, toRank: number) {
        // Check if the move is within the bounds of the board
        if (toFile < 'A' || toFile > 'H' || toRank < 1 || toRank > 8) {
            return false;
        }

        if (this.type === PieceType.Pawn) return this.isValidMovePawn(fromFile, fromRank, toFile, toRank)
        else if (this.type === PieceType.Knight) return this.isValidMoveKnight(fromFile, fromRank, toFile, toRank)
        else if (this.type === PieceType.Bishop) return this.isValidMoveBishop(fromFile, fromRank, toFile, toRank)
        else if (this.type === PieceType.Rook) return this.isValidMoveRook(fromFile, fromRank, toFile, toRank)
        else if (this.type === PieceType.Queen) return this.isValidMoveQueen(fromFile, fromRank, toFile, toRank)
        else if (this.type === PieceType.King) return this.isValidMoveKing(fromFile, fromRank, toFile, toRank)
        else return false
    }

    private isValidMovePawn(fromFile: string, fromRank: number, toFile: string, toRank: number) {
        const direction = this.Color === PieceColor.White ? 1 : -1;

        if (fromFile === toFile && toRank === fromRank + direction) {
            return true;
        }

        if (fromFile === toFile && toRank === fromRank + 2 * direction && (fromRank === 2 || fromRank === 7)) {
            return true;
        }

        // Pawn can capture diagonally
        // Imagine this implemented 💥🙌

        return false
    }

    private isValidMoveKnight(fromFile: string, fromRank: number, toFile: string, toRank: number) {
        const fileDiff = Math.abs(toFile.charCodeAt(0) - fromFile.charCodeAt(0));
        const rankDiff = Math.abs(toRank - fromRank);

        return (fileDiff === 1 && rankDiff === 2) || (fileDiff === 2 && rankDiff === 1);
    }

    private isValidMoveBishop(fromFile: string, fromRank: number, toFile: string, toRank: number) {
        return this.isValidDiagonalMove(fromFile, fromRank, toFile, toRank)
    }

    private isValidMoveRook(fromFile: string, fromRank: number, toFile: string, toRank: number) {
        return this.isValidStraightLineMove(fromFile, fromRank, toFile, toRank)
    }

    private isValidMoveQueen(fromFile: string, fromRank: number, toFile: string, toRank: number) {
        return this.isValidDiagonalMove(fromFile, fromRank, toFile, toRank) || this.isValidStraightLineMove(fromFile, fromRank, toFile, toRank)
    }

    private isValidMoveKing(fromFile: string, fromRank: number, toFile: string, toRank: number) {
        const fileDiff = Math.abs(toFile.charCodeAt(0) - fromFile.charCodeAt(0));
        const rankDiff = Math.abs(toRank - fromRank);

        return (fileDiff <= 1 && rankDiff <= 1) && (fileDiff !== 0 || rankDiff !== 0);
    }

    private isValidDiagonalMove(fromFile: string, fromRank: number, toFile: string, toRank: number): boolean {
        const fileDiff = Math.abs(toFile.charCodeAt(0) - fromFile.charCodeAt(0));
        const rankDiff = Math.abs(toRank - fromRank);

        return fileDiff === rankDiff;
    }

    private isValidStraightLineMove(fromFile: string, fromRank: number, toFile: string, toRank: number): boolean {
        const isMovingAlongFile = fromFile === toFile;
        const isMovingAlongRank = fromRank === toRank;

        return isMovingAlongFile !== isMovingAlongRank;
    }
}
