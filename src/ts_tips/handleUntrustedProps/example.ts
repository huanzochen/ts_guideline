import { z } from "zod";

// 1. 使用 zod 定義 Schema
// 這成為了我們的「單一事實來源」。它既是驗證規則，也是型別的定義。
const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
  address: z.string(),
});

// 2. 從 Schema 推斷出 TypeScript 型別
// 我們不再需要手動撰寫 `type User = { ... }`
type User = z.infer<typeof UserSchema>;

// 模擬從上游接收到的不信任的資料 (與前一個範例相同)
const unTrustedProp: unknown = {
  name: "Bob",
  age: 10,
  address: "earth",
};

const invalidProp: unknown = {
  name: "Alice",
  // age is missing
  address: "mars",
};

function OurComponentZod(props: unknown) {
  // 3. 使用 safeParse 進行驗證
  // safeParse 不會拋出錯誤，而是回傳一個包含成功/失敗狀態和結果的物件
  const validationResult = UserSchema.safeParse(props);

  if (validationResult.success) {
    // 驗證成功！
    // validationResult.data 的型別已經被 TypeScript 正確推斷為 User
    const user = validationResult.data;
    console.log(`User's age: ${user.age}`);
    return `Welcome, ${user.name}!`;
  } else {
    // 驗證失敗！
    // validationResult.error 包含了詳細的錯誤訊息
    console.error("Validation failed:", validationResult.error.flatten());
    return "Error Page: Invalid user data received.";
  }
}

console.log("--- Testing with valid data ---");
console.log(OurComponentZod(unTrustedProp));

console.log("\n--- Testing with invalid data ---");
console.log(OurComponentZod(invalidProp));

export {};
