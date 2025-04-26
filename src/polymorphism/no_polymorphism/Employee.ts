export enum EmployeeType {
  COMMISIONED = "commissioned",
  HOURLY = "hourly",
  SALARIED = "salaried",
}

type CommissionedOptions = {
  baseSalary: number;
  commisionRate: number;
  salesNumber: number;
};

type HourlyOptions = {
  hoursWorked: number;
  baseHourlyRate: number;
  overtimeHours: number;
  overtimeRate: number;
};

type EmployeeOptions = CommissionedOptions | HourlyOptions;

export class Employee {
  public name: string;
  public type: string;

  // EmployeeType.COMMISIONED
  public baseSalary: number;
  public commisionRate: number;
  public salesNumber: number;

  // EmployeeType.HOURLY
  public hoursWorked: number;
  public baseHourlyRate: number;
  public overtimeHours: number;
  public overtimeRate: number;

  constructor(name: string, type: string, options?: EmployeeOptions) {
    this.name = name;
    this.type = type;

    Object.assign(this, options);
  }
}
