class BaseShape2 {
  kind: string;

  constructor(kind: string) {
    this.kind = kind;
  }
}

class Circle2 extends BaseShape2 {
  readonly kind: "circle" = "circle";
  radius: number;

  constructor(radius: number) {
    super("circle");
    this.radius = radius;
  }
}

class Square2 extends BaseShape2 {
  readonly kind: "square" = "square";
  side: number;

  constructor(side: number) {
    super("square");
    this.side = side;
  }
}

type areaProps = Circle2 | Square2;

const throwError = (message: string): never => {
  throw new Error(message);
};

const area = (shape: areaProps): number => {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
      break;
    case "square":
      return shape.side * shape.side;
      break;
    default:
      const _exhaustiveCheck: never = shape;
      throwError(`Unkown shape: ${JSON.stringify(shape)}`);
      return _exhaustiveCheck; // This line will never be reached
  }
};

const myCicle: Circle2 = new Circle2(10);
const mySquare: Square2 = new Square2(5);

console.log("Circle area:", area(myCicle));
console.log("Square area:", area(mySquare));
