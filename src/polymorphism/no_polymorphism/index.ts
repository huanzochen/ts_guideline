import { Employee, EmployeeType } from "./Employee";

class InvalidEmployeeType extends Error {
  constructor(type: string) {
    super(`Invalid employee type: ${type}`);
    this.name = "InvalidEmployeeType";
  }
}

const calCommissionPay = (e: Employee) => {
  // Null Check
  if (
    typeof e.baseSalary !== "number" ||
    typeof e.commisionRate !== "number" ||
    typeof e.salesNumber !== "number"
  ) {
    throw new Error("Invalid commission employee data");
  }

  // Calculate commission pay
  const commissionPay = e.commisionRate * e.salesNumber;
  return e.baseSalary + commissionPay;
};

const calHourPay = (e: Employee) => {
  // Null Check
  if (
    typeof e.baseHourlyRate !== "number" ||
    typeof e.overtimeHours !== "number" ||
    typeof e.overtimeRate ||
    typeof e.hoursWorked !== "number"
  ) {
    throw new Error("Invalid hourly employee data");
  }
  //Calculate hourly pay
  const overtimePay = e.overtimeHours * e.overtimeRate;
  return e.hoursWorked * e.baseHourlyRate + overtimePay;
};

const calSalaryPay = (e: Employee) => {
  // Null Check
  if (typeof e.hoursWorked !== "number") {
    throw new Error("Invalid salaried employee data");
  }
  // Calculate salary pay
  return 3000; // Assuming a fixed salary for simplicity
};

const calculatePay = (e: Employee) => {
  switch (e.type) {
    case EmployeeType.COMMISIONED:
      return calCommissionPay(e);
    case EmployeeType.HOURLY:
      return calHourPay(e);
    case EmployeeType.SALARIED:
      return calSalaryPay(e);
    default:
      throw new InvalidEmployeeType(e.type);
  }
};

export const run = () => {
  const employees = [
    new Employee("John", EmployeeType.COMMISIONED, {
      baseSalary: 1000,
      commisionRate: 0.015,
      salesNumber: 10_000,
    }),
    new Employee("Jane", EmployeeType.HOURLY, {
      hoursWorked: 40,
      baseHourlyRate: 1,
      overtimeHours: 10,
      overtimeRate: 1.5,
    }),
    new Employee("Doe", EmployeeType.SALARIED),
  ];

  for (const e of employees) {
    try {
      const pay = calculatePay(e);
      console.log(`${e.name} 薪水: $${pay}`);
    } catch (error) {
      console.log(error);
      console.error(
        `無效的員工類型: ${error.name}, ${error.message}, ${error.stack}`
      );
    }
  }
};
