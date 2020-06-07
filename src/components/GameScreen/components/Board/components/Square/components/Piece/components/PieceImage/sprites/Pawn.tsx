import React, { FC } from "react";
import { Color } from "../../../../../../../../../../../domain/types";

interface Props {
  color: string;
  active: boolean;
  size: number;
}

const Pawn: FC<Props> = ({ color, active, size }) => {
  const primary = color;
  const secondary = color === Color.Black ? Color.White : Color.Black;
  return (
    <svg width={size} height={size} viewBox="0 0 45 45">
      <defs>
        <filter
          id="dangerShine"
          filterUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="45"
          height="45"
        >
          <feColorMatrix
            type="matrix"
            result="color"
            values="1 0 0 0 0
                                   0 0 0 0 0
                                   0 0 0 0 0
                                   0 0 0 1 0"
          />
          <feGaussianBlur in="color" stdDeviation="4" result="blur" />
          <feOffset in="blur" dx="0" dy="0" result="offset" />
          <feMerge>
            <feMergeNode in="bg"></feMergeNode>
            <feMergeNode in="offset"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "
        fill={primary}
        stroke={secondary}
        strokeWidth={1.2}
        filter={active ? "url(#dangerShine)" : undefined}
      />
    </svg>
  );
};

export { Pawn };
