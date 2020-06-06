export interface Coordinates {
  x: number;
  y: number;
}

export interface Piece {
  type: PieceType;
  color: Color;
  location: Coordinates;
}

export enum PieceType {
  Pawn = "Pawn",
  Rook = "Rook",
  Knight = "Knight",
  Bishop = "Bishop",
  Queen = "Queen",
  King = "King",
}

export enum Color {
  Black = "#000000",
  White = "#ffffff",
}
