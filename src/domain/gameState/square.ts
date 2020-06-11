import { Coordinates } from "domain/types";

export const squareColor = (location: Coordinates) =>
  isBlackSquare(location) ? "#41787C" : "#e4e0d3";

const isBlackSquare = ({ x, y }: Coordinates): boolean => (x - y) % 2 === 0;
