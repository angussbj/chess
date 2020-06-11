export interface State {
  pieces: Piece[];
}

export type setState = (state: State) => void;

export interface Piece {
  id: number;
  type: PieceType;
  color: Color;
  location: Coordinates;
  active: boolean;
  alive: boolean;
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
  Black = "#404040",
  White = "#fcfcfc",
}

export enum Turn {
  Black = "Black",
  White = "White",
}

export interface Coordinates {
  x: number;
  y: number;
}
