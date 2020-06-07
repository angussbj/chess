import { Piece } from "./Piece";
import { Coordinates, PieceType, Color } from "./types";

export class State {
  pieces: Piece[];
  activeLocation: Coordinates | undefined;

  constructor() {
    this.pieces = getInitialState();
  }

  livePiecesAt(location: Coordinates): Piece[] {
    return this.pieces
      .filter(
        (piece) =>
          piece.location.x === location.x && piece.location.y === location.y
      )
      .filter((piece) => piece.alive);
  }

  moveActiveTo(location: Coordinates): void {
    this.livePiecesAt(location).map((p) => p.kill());
  }
}

const getInitialState = (): Piece[] => [
  new Piece(PieceType.Pawn, Color.White, { x: 0, y: 1 }),
  new Piece(PieceType.Pawn, Color.White, { x: 1, y: 1 }),
  new Piece(PieceType.Pawn, Color.White, { x: 2, y: 1 }),
  new Piece(PieceType.Pawn, Color.White, { x: 3, y: 1 }),
  new Piece(PieceType.Pawn, Color.White, { x: 4, y: 1 }),
  new Piece(PieceType.Pawn, Color.White, { x: 5, y: 1 }),
  new Piece(PieceType.Pawn, Color.White, { x: 6, y: 1 }),
  new Piece(PieceType.Pawn, Color.White, { x: 7, y: 1 }),
  new Piece(PieceType.Rook, Color.White, { x: 0, y: 0 }),
  new Piece(PieceType.Rook, Color.White, { x: 7, y: 0 }),
  new Piece(PieceType.Knight, Color.White, { x: 1, y: 0 }),
  new Piece(PieceType.Knight, Color.White, { x: 6, y: 0 }),
  new Piece(PieceType.Bishop, Color.White, { x: 2, y: 0 }),
  new Piece(PieceType.Bishop, Color.White, { x: 5, y: 0 }),
  new Piece(PieceType.King, Color.White, { x: 4, y: 0 }),
  new Piece(PieceType.Queen, Color.White, { x: 3, y: 0 }),
  new Piece(PieceType.Pawn, Color.Black, { x: 0, y: 6 }),
  new Piece(PieceType.Pawn, Color.Black, { x: 1, y: 6 }),
  new Piece(PieceType.Pawn, Color.Black, { x: 2, y: 6 }),
  new Piece(PieceType.Pawn, Color.Black, { x: 3, y: 6 }),
  new Piece(PieceType.Pawn, Color.Black, { x: 4, y: 6 }),
  new Piece(PieceType.Pawn, Color.Black, { x: 5, y: 6 }),
  new Piece(PieceType.Pawn, Color.Black, { x: 6, y: 6 }),
  new Piece(PieceType.Pawn, Color.Black, { x: 7, y: 6 }),
  new Piece(PieceType.Rook, Color.Black, { x: 0, y: 7 }),
  new Piece(PieceType.Rook, Color.Black, { x: 7, y: 7 }),
  new Piece(PieceType.Knight, Color.Black, { x: 1, y: 7 }),
  new Piece(PieceType.Knight, Color.Black, { x: 6, y: 7 }),
  new Piece(PieceType.Bishop, Color.Black, { x: 2, y: 7 }),
  new Piece(PieceType.Bishop, Color.Black, { x: 5, y: 7 }),
  new Piece(PieceType.King, Color.Black, { x: 4, y: 7 }),
  new Piece(PieceType.Queen, Color.Black, { x: 3, y: 7 }),
];
