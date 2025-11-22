// This pattern is called "Discriminated Union" (or Tagged Union)
// It is NOT a function, but a powerful Type structure.

enum ShapeKind {
  Circle = "circle",
  Square = "square",
  Triangle = "triangle",
}

type Circle = { type: ShapeKind.Circle; radius: number };
type Square = { type: ShapeKind.Square; side: number };
type Triangle = { type: ShapeKind.Triangle; base: number; height: number };

type Shape = Circle | Square | Triangle;

// ✨ DEMO POINT 1: Type Narrowing (Safe Access)
// TypeScript knows that 'radius' only exists when type is 'circle'.
export function getArea(shape: Shape): number {
  switch (shape.type) {
    case ShapeKind.Circle:
      // Try typing "shape." here -> You will ONLY see 'radius', not 'side' or 'base'
      return Math.PI * shape.radius ** 2;

    case ShapeKind.Square:
      // TypeScript knows this is a Square
      return shape.side ** 2;

    case ShapeKind.Triangle:
      // TypeScript knows this is a Triangle
      return 0.5 * shape.base * shape.height;

    default:
      // ✨ DEMO POINT 2: Exhaustiveness Checking
      // If you add "Rectangle" to the Shape type later but forget to handle it here,
      // this line will throw a compile-time error.
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
