interface User {
  name: string;
  title: string;
}

const profile = {
  user: {
    name: "Bob",
    title: "Developer",
  },
  address: "123 Main St",
  type: "admin",
};

const getUserData = ({ profile }: { profile: unknown }): User | null => {
  if (profile && typeof profile === "object" && "user" in profile) {
    return { name: profile.user.name, title: profile.user.title };
  }
  return null;
};

const isUser = (value: unknown): value is User => {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    "title" in value &&
    typeof (value as any).name === "string" &&
    typeof (value as any).title === "string"
  );
};

const getUserData2 = ({ profile }: { profile: unknown }): User | null => {
  if (
    profile &&
    typeof profile === "object" &&
    "user" in profile &&
    isUser(profile.user)
  ) {
    const user = profile.user;
    return { name: user.name, title: user.title };
  }
  return null;
};

const bob = getUserData2({ profile });
console.log("bob:", bob);

export {};
