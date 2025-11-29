interface User {
  id: string;
  name: string;
}

interface User {
  title: string;
}

const user: User = {
  id: "1",
  name: "Alice",
  title: "Engineer", // 這裡如果不加 title 會報錯，因為兩個 User interface 已經合併了
};

interface Admin extends User {
  role: "admin" | "super-admin";
}

const admin: Admin = {
  id: "2",
  name: "Bob",
  title: "Manager",
  role: "admin",
};

export {};
