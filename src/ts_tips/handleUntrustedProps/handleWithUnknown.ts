const unTrustedProp: unknown = {
  name: "Bob",
  age: 10,
  address: "earth",
};

type User = {
  name: string;
  age: number;
  address: string;
};

function OurComponentUnknown(props: unknown) {
  // X Error: You can't access the props directly until Narrowing it's type
  // console.log(props.name);

  // V unknown needs Check.
  if (typeof props === "object" && props !== null && "name" in props) {
    // Now we knew props is a object that is not null and contains 'name'

    // Do some neccessary Check, and then we trust it is User
    const user = props as User;

    console.log(user.age);
  } else return "Error Page";
}

console.log(OurComponentUnknown(unTrustedProp));

export {};
