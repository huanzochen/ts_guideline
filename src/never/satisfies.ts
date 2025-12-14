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

/*
比較 satisfies never 與 const _exhaustiveCheck: never = shape;

1. 語法簡潔度 (Conciseness):
   - const _exhaustiveCheck: never = shape; 需要宣告一個變數，通常這變數在 runtime 不會被使用，容易被 linter 警告 (unused variable)。
   - shape satisfies never; 是一個表達式，不需要宣告額外的變數，語法更乾淨。

2. 執行時期影響 (Runtime Impact):
   - const _ = shape; 會編譯成 JavaScript 的賦值語句 (var _ = shape;)。
   - shape satisfies never; 純粹是 TypeScript 的型別檢查，編譯後的 JavaScript 不會產生額外的變數賦值。

3. 功能性 (Functionality):
   - 兩者都能達到「窮盡檢查 (Exhaustiveness Check)」的目的。
   - 當 switch case 少了某個案例時，兩者都會報錯。
   - satisfies 是 TypeScript 4.9 引入的新語法，專門用於「驗證型別但不改變型別推斷」，在這裡使用非常合適。
*/
