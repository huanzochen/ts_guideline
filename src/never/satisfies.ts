export {};

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  side: number;
};

// Uncomment Triangle to see the error in the switch statement
type Triangle = {
  kind: "triangle";
  side: number;
};

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    default:
      // Using 'satisfies never' to check for exhaustiveness.
      // If a new shape type is added and not handled above, 'shape' will not be 'never',
      // and this line will raise a TypeScript error.
      shape satisfies never;
      throw new Error(`Unhandled shape: ${JSON.stringify(shape)}`);
  }
}

const circle: Circle = { kind: "circle", radius: 5 };
const square: Square = { kind: "square", side: 10 };

console.log(getArea(circle));
console.log(getArea(square));
