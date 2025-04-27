export abstract class EmployeeBase {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public abstract calculatePay(): number;
}

// Invalid EmployeeType 應該寫在 employee 還是 main 裡面?
export class InvalidEmployeeType extends Error {
  constructor(type: string) {
    super(`Invalid employee type: ${type}`);
    this.name = "InvalidEmployeeType";
  }
}

export class CommissionedEmployee extends EmployeeBase {
  private baseSalary: number;
  private commissionRate: number;
  private salesNumber: number;

  constructor(
    name: string,
    baseSalary: number,
    commissionRate: number,
    salesNumber: number
  ) {
    super(name);
    this.baseSalary = baseSalary;
    this.commissionRate = commissionRate;
    this.salesNumber = salesNumber;
  }

  public calculatePay(): number {
    // Calculate commision pay
    const commissionPay = this.commissionRate * this.salesNumber;
    return this.baseSalary + commissionPay;
  }
}

export class HourlyEmployee extends EmployeeBase {
  private hoursWorked: number;
  private baseHourlyRate: number;
  private overtimeHours: number;
  private overtimeRate: number;

  constructor(name: string, hoursWorked: number, overtimeHours: number) {
    super(name);
    this.hoursWorked = hoursWorked;
    this.overtimeHours = overtimeHours;
    this.baseHourlyRate = 130;
    this.overtimeRate = 180;
  }

  public calculatePay(): number {
    // Calculate hourly pay
    const overtimePay = this.overtimeHours * this.overtimeRate;
    return this.hoursWorked * this.baseHourlyRate + overtimePay;
  }
}

export class SalariedEmployee extends EmployeeBase {
  constructor(name: string) {
    super(name);
  }

  public calculatePay(): number {
    // Calculate salary pay
    return 3000; // Assuming a fixed salary for simplicity
  }
}
