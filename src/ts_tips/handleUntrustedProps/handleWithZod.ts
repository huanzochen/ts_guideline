import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  address: z.string(),
});

type User = z.infer<typeof userSchema>;

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
  const validationResult = userSchema.safeParse(props);

  if (validationResult.success) {
    // Validation success!
    const user = validationResult.data;
    console.log(`User's age: ${user.age}`);
    return `Welcome, ${user.name}!`;
  } else {
    // Validation failed!!
    console.error("Validation failed:", validationResult.error.flatten());
    return "Error Page";
  }
}

console.log(OurComponentZod(unTrustedProp));
console.log(OurComponentZod(invalidProp));

export {};
