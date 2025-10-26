function getValue() {
  return "Hello World";
}

const x: any = getValue();

// @ts-ignore
const y = x.map((z) => z.foo());
