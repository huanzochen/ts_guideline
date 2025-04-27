import { run as runNoPolymorphism } from "./no_polymorphism/index.js";
import { run as runPolymorphism } from "./polymorphism/index.js";

export const run = () => {
  console.log("no Polymorphism");
  runNoPolymorphism();
  console.log("Polymorphism");
  runPolymorphism();
};
