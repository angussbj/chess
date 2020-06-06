import { PieceType, Coordinates, Color } from "./types";

class Piece {
  alive: boolean;

  constructor(
    public type: PieceType,
    public color: Color,
    public location: Coordinates
  ) {
    this.alive = true;
  }

  moveTo(newLocation: Coordinates) {
    this.location = newLocation;
  }

  kill() {
    this.alive = false;
  }
}

export { Piece };
