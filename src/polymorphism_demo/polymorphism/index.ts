import {
  CommissionedEmployee,
  HourlyEmployee,
  SalariedEmployee,
  InvalidEmployeeType,
  EmployeeBase,
} from "./Employee.js";

const isValidEmployee = (e: any): e is EmployeeBase =>
  e instanceof EmployeeBase;

export const run = () => {
  const employees = [
    new CommissionedEmployee("John", 1000, 0.15, 30_000),
    new HourlyEmployee("Jane", 40, 10),
    new SalariedEmployee("Doe"),
    { name: "Invalid", type: "Unknown" },
  ];

  for (const e of employees) {
    try {
      if (!isValidEmployee(e)) {
        throw new InvalidEmployeeType(e.type || "Unknown");
      }
      const pay = e.calculatePay();
      console.log(`${e.name} 薪水: $${pay}`);
    } catch (error) {
      console.error(
        `Error Processing employee: ${e.name}: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }
};
