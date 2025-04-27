import {
  CommissionedEmployee,
  HourlyEmployee,
  SalariedEmployee,
} from "./Employee.js";

class InvalidEmployeeType extends Error {
  constructor(type: string) {
    super(`Invalid employee type: ${type}`);
    this.name = "InvalidEmployeeType";
  }
}

export const run = () => {
  const employees = [
    new CommissionedEmployee("John", 1000, 0.15, 30_000),
    new HourlyEmployee("Jane", 40, 10),
    new SalariedEmployee("Doe"),
  ];

  for (const e of employees) {
    try {
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
