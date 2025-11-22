import { ReactNode } from "react";

enum ShapeKind {
  Circle = "circle",
  Square = "square",
  Triangle = "triangle",
}

type Circle = { type: ShapeKind.Circle; radius: number };
type Square = { type: ShapeKind.Square; side: number };
type Triangle = { type: ShapeKind.Triangle; base: number; height: number };

type Shape = Circle | Square | Triangle;

export function getShape(shape: Shape): ReactNode {
  switch (shape.type) {
    case ShapeKind.Circle:
      return <img src="file_not_found.png" alt="File Not Found" />;
    case ShapeKind.Square:
      return <img src="option_missing.png" alt="Option Missing" />;
    case ShapeKind.Triangle:
      return <img src="option_missing.png" alt="Option Missing" />;
    default:
      // Exhaustiveness check
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
