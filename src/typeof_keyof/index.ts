type IsReviewedFunc = (value: number) => boolean;
const isReviewed: IsReviewedFunc = (value) => {
  return value > 10;
};

type IsReviewFuncReturnType = ReturnType<IsReviewedFunc>;

// You can't do this because type only exists at the compile time.
// console.log("IsReviewFuncReturnType:", IsReviewFuncReturnType);

const reviewed: boolean = true;
console.log("typeof reviewed:", typeof reviewed); // boolean

// // This cannot be done because keyof only works with compile time
// console.log("keyof reviewed:", keyof reviewed)

type Coordinate = { x: number; y: number };
type KeyofCoordinate = keyof Coordinate; // "x" | "y"
type CoordinateKey = Coordinate[keyof Coordinate]; // number

const coordinate: Coordinate = { x: 10, y: 20 };
const coordinateKey: CoordinateKey = coordinate.x; // 10
console.log("coordinateKey:", coordinateKey); // 10

console.log("typeof coordinate.x:", typeof coordinate.x);

const directions = {
  up: "UP",
  down: "DOWN",
  left: "LEFT",
  right: "RIGHT",
} as const;

type DirectionTypes = typeof directions;
type DirectionKeys = keyof typeof directions; // "up" | "down" | "left" | "right"
type DirectionValues = (typeof directions)[keyof typeof directions];

enum DirectionsEnum {
  up = "UP",
  down = "DOWN",
  left = "LEFT",
  right = "RIGHT",
}
type DirectionsEnumKeys = keyof typeof DirectionsEnum;
type DirectionsEnumType = (typeof DirectionsEnum)[keyof typeof DirectionsEnum]; // "UP" | "DOWN" | "LEFT" | "RIGHT"

export const moveBy = (direction: DirectionTypes) => {
  return direction + "!";
};
