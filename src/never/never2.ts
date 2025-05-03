enum ShapeKind {
  Circle = "circle",
  Square = "square",
}

export class BaseShape {
  kind: ShapeKind;

  constructor(kind: ShapeKind) {
    this.kind = kind;
  }
}

class Circle extends BaseShape {
  readonly kind: ShapeKind.Circle = ShapeKind.Circle;
  radius: number;

  constructor(radius: number) {
    super(ShapeKind.Circle);
    this.radius = radius;
  }
}

class Square extends BaseShape {
  readonly kind: ShapeKind.Square = ShapeKind.Square;
  side: number;

  constructor(side: number) {
    super(ShapeKind.Square);
    this.side = side;
  }
}

type areaProps = Circle | Square;

const throwCustomError = (message: string): never => {
  throw new Error(message);
};

const area = (shape: areaProps): number => {
  switch (shape.kind) {
    case ShapeKind.Circle:
      return Math.PI * shape.radius ** 2;
    case ShapeKind.Square:
      return shape.side * shape.side;
    default: {
      const _exhaustiveCheck: never = shape;
      throw new Error(`Unhandled shape: ${JSON.stringify(_exhaustiveCheck)}`);
    }
  }
};

const myCicle: Circle = new Circle(10);
const mySquare: Square = new Square(5);

console.log("Circle area:", area(myCicle));
console.log("Square area:", area(mySquare));
