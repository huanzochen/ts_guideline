interface Person {
  name: string;
}

const people = ["Bob", "Alice", "Eve"].map(
  (name) =>
    ({
      name,
    } as Person)
);

// This is better, but introduce a lot of noise.
const people2 = ["Bob", "Alice", "Eve"].map((name) => {
  const person: Person = { name };
  return person;
});

const people3 = ["Bob", "Alice", "Eve"].map<Person>((name) => ({ name }));

const people4 = ["Bob", "Alice", "Eve"].map((name): Person => ({ name }));

const people5: Person[] = ["Bob", "Alice", "Eve"].map((name) => ({ name }));
