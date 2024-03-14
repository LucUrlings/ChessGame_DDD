import {Board} from "./Board";
import {PieceType} from "./PieceType";
import {Piece} from "./Piece";
import {PieceColor} from "./PieceColor";

export class Game {
    private board: Board;

    constructor() {
        this.board = new Board();
        this.setupBoard();
    }

    private setupBoard(): void {
        this.board = new Board()

        this.board.placePiece(new Piece(PieceColor.White, PieceType.Rook), 'A', 1)
        this.board.placePiece(new Piece(PieceColor.White, PieceType.Pawn), 'B', 2)
    }

    // private parseChessNotation(input: string) {
    //     const regex = /^([KQRBN]?)([a-h]?[1-8]?)(x?)([a-h][1-8])(=?[QRBN]?)$/;
    //     const matches = input.match(regex);
    //     if (!matches) {
    //         throw new Error("Invalid chess notation.");
    //     }
    //
    //     const [, piece, from, capture, to, promotion] = matches;
    //
    //     return {
    //         piece: PieceType[pieceMapping[piece]] || null,
    //         from: from || null,
    //         to: to,
    //         promotion: promotion ? promotion.slice(1) : null,
    //     };
    // }

    movePiece(fromFile: string, fromRank: number, toFile: string, toRank: number): void {
        this.board.movePiece(fromFile.toUpperCase(), fromRank, toFile.toUpperCase(), toRank);
    }
}