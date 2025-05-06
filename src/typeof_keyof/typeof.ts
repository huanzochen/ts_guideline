interface Person {
  name: string;
}

interface LifeSpan {
  job: string;
  duration: number;
}

type PersonWithLiftSpanKey = keyof (Person & LifeSpan); // "name" | "job" | "duration"

type PersonWithLeftSpanNever = keyof (Person | LifeSpan); // never

type PersonWithLifeSpan = keyof Person | keyof LifeSpan; // "name" | "job" | "duration"

type PersonWithLifeSpanNever2 = keyof Person & keyof LifeSpan; // never

const getKey = <K extends string>(val: any, key: K) => {
  return key;
};
getKey({}, "name");
// getKey({}, 13); // Error: Argument of type '13' is not assignable to parameter of type 'string'.
getKey({}, "name" as const);
