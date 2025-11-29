import { z } from "zod";

// Strategy: Use .catch() for fields that should strictly not fail the whole validation,
// but instead fallback to a safe value (like undefined) while logging a warning.

const userSchema = z.object({
  // Critical field: Validation will fail if this is invalid
  name: z.string(),

  // Non-critical field: Use transform to handle validation manually
  // If validation fails, we log a warning and return undefined (making it effectively optional)
  age: z.unknown().transform((val) => {
    const result = z.number().safeParse(val);
    if (result.success) {
      return result.data;
    } else {
      console.warn(
        `[Warning] Invalid age provided: ${result.error.issues[0].message}. Fallback to undefined.`
      );
      return undefined;
    }
  }),

  // Same pattern for address
  address: z.unknown().transform((val) => {
    // We want string or undefined.
    // If it's missing (undefined), safeParse(undefined) fails for z.string(), so we handle it.
    if (val === undefined) return undefined;

    const result = z.string().safeParse(val);
    if (result.success) {
      return result.data;
    } else {
      console.warn(
        `[Warning] Invalid address provided: ${result.error.issues[0].message}. Fallback to undefined.`
      );
      return undefined;
    }
  }),
});

type User = z.infer<typeof userSchema>;

// Helper function to show usage
function processUser(data: unknown) {
  console.log("\nProcessing data:", JSON.stringify(data));
  const result = userSchema.safeParse(data);

  if (result.success) {
    console.log("✅ Validation Successful!");
    console.log("User data:", result.data);
  } else {
    console.error("❌ Validation Failed!");
    console.error("Errors:", result.error.format());
  }
}

// Case 1: Everything valid
processUser({
  name: "Alice",
  age: 30,
  address: "Wonderland",
});

// Case 2: Non-critical field invalid (age is a string)
// Should pass validation but log warning for age
processUser({
  name: "Bob",
  age: "not a number",
  address: "Builder Land",
});

// Case 3: Critical field invalid (name missing)
// Should fail validation
processUser({
  age: 25,
  address: "Nowhere",
});

// Case 4: Another non-critical invalid (address is number)
processUser({
  name: "Charlie",
  age: 40,
  address: 12345,
});
