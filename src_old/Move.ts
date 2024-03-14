// Value Object
import {Location} from "./Location";
import {Type} from "./Piece";

export class Move {
    private pieceType: Type
    private from: Location
    private to: Location

    constructor(pieceType, from, to) {
        this.pieceType = pieceType
        this.from = from
        this.to = to
    }
}