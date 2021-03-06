import React, { FC } from "react";
import { Color } from "domain/types";
import { Glow } from "./filters";

interface Props {
  color: string;
  active: boolean;
  size: number;
}

const King: FC<Props> = ({ color, active, size }) => {
  const primary = color;
  const secondary = color === Color.Black ? Color.White : Color.Black;
  return (
    <svg width={size} height={size} viewBox="0 0 45 45">
      <defs>
        <Glow />
      </defs>
      <g
        fill={primary}
        stroke={"#000000"}
        strokeWidth={0.9}
        filter={active ? "url(#glow)" : undefined}
      >
        <path d="M 22.5,11.63 L 22.5,6" />
        <path d="M 20,8 L 25,8" />
        <path d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25" />
        <path d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z " />
        <path d="M 11.5,30 C 17,27 27,27 32.5,30" />
        <path d="M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5" />
        <path d="M 11.5,37 C 17,34 27,34 32.5,37" />
      </g>
    </svg>
  );
};

export { King };
