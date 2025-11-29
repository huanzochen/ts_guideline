enum ShapeKind {
  Circle = "circle",
  Square = "square",
  Triangle = "triangle",
}

type Circle = { type: ShapeKind.Circle; radius: number };
type Square = { type: ShapeKind.Square; side: number };
type Triangle = { type: ShapeKind.Triangle; base: number; height: number };

type Shape = Circle | Square | Triangle;

export function getArea(shape: Shape): number {
  // switch (shape.type) {
  //   case ShapeKind.Circle:
  //     // Only "radius" will be here if you type shape
  //     return Math.PI * shape.radius ** 2;
  //   case ShapeKind.Square:
  //     // TypeScript knows this is a Square
  //     return shape.side ** 2;
  //   case ShapeKind.Triangle:
  //     // TypeScript knows this is a Triangle
  //     return 0.5 * shape.base * shape.height;
  //   default:
  //     const _exhaustiveCheck: never = shape;
  //     return _exhaustiveCheck;
  // }
}
