// Type definition
export function getHummingHorse() {
  type hummingHorse = {
    name: string;
    age: number;
  };
  const Mashely: hummingHorse = { name: "Mashely", age: 10 };
  return Mashely;
}

// Interface definition
// This will cause error, because typescript wants to preserve interface name.
export function getHummingHorse2(): { name: string; age: number } {
  interface HummingHorse2 {
    name: string;
    age: number;
  }
  const Randley: HummingHorse2 = { name: "Randley", age: 7 };
  return Randley;
}

// Type definition with arrow function
export const getHummingHorse3 = () => {
  type hummingHorse = {
    name: string;
    age: number;
  };
  const Dadley: hummingHorse = { name: "Dadley", age: 10 };
  return Dadley;
};
