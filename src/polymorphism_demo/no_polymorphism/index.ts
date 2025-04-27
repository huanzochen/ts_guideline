import { Employee, EmployeeType } from "./Employee.js";

class InvalidEmployeeType extends Error {
  constructor(type: string) {
    super(`Invalid employee type: ${type}`);
    this.name = "InvalidEmployeeType";
  }
}

const calCommissionPay = (e: Employee<EmployeeType.COMMISSIONED>) => {
  const { baseSalary, commissionRate, salesNumber } = e.options;

  // Calculate commission pay
  const commissionPay = commissionRate * salesNumber;
  return baseSalary + commissionPay;
};

const calHourPay = (e: Employee<EmployeeType.HOURLY>) => {
  const { hoursWorked, baseHourlyRate, overtimeHours, overtimeRate } =
    e.options;
  // Calculate hourly pay
  const overtimePay = overtimeHours * overtimeRate;
  return hoursWorked * baseHourlyRate + overtimePay;
};

const calSalaryPay = (e: Employee<EmployeeType.SALARIED>) => {
  // Calculate salary pay
  return 3000; // Assuming a fixed salary for simplicity
};

const calculatePay = <T extends EmployeeType>(e: Employee<T>) => {
  switch (e.type) {
    case EmployeeType.COMMISSIONED:
      return calCommissionPay(e as Employee<EmployeeType.COMMISSIONED>);
    case EmployeeType.HOURLY:
      return calHourPay(e as Employee<EmployeeType.HOURLY>);
    case EmployeeType.SALARIED:
      return calSalaryPay(e as Employee<EmployeeType.SALARIED>);
    default:
      throw new InvalidEmployeeType(e.type);
  }
};

export const run = () => {
  const employees = [
    new Employee("John", EmployeeType.COMMISSIONED, {
      baseSalary: 1000,
      commissionRate: 0.15,
      salesNumber: 30_000,
    }),
    new Employee("Jane", EmployeeType.HOURLY, {
      hoursWorked: 40,
      baseHourlyRate: 130,
      overtimeHours: 10,
      overtimeRate: 180,
    }),
    new Employee("Doe", EmployeeType.SALARIED, {}),
  ];

  for (const e of employees) {
    try {
      const pay = calculatePay(e);
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
