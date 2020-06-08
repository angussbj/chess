import { Coordinates } from "domain/types";

export const squareColor = (location: Coordinates) =>
  isBlackSquare(location) ? "indigo" : "powderblue";

const isBlackSquare = ({ x, y }: Coordinates): boolean => (x - y) % 2 === 0;
