// Entity
import {Location} from "./Location";

export enum Color {
    'WHITE',
    'BLACK'
}

export enum Type {
    'PAWN',
    'KNIGHT',
    'QUEEN',
    'BISHOP',
    'ROOK',
    'KING'
}
export class Piece {
    public Location: Location
    public Color: Color
    public type: Type
}