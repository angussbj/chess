import { PieceType, Coordinates, Color } from "./types";

class Piece {
  alive: boolean;
  active: boolean;

  constructor(
    public type: PieceType,
    public color: Color,
    public location: Coordinates
  ) {
    this.alive = true;
    this.active = false;
  }

  moveTo(newLocation: Coordinates) {
    this.location = newLocation;
  }

  kill() {
    this.alive = false;
  }

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
  }
}

export { Piece };
