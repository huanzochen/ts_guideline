export enum EmployeeType {
  COMMISSIONED = "commissioned",
  HOURLY = "hourly",
  SALARIED = "salaried",
}

type CommissionedOptions = {
  baseSalary: number;
  commissionRate: number;
  salesNumber: number;
};

type HourlyOptions = {
  hoursWorked: number;
  baseHourlyRate: number;
  overtimeHours: number;
  overtimeRate: number;
};

export type EmployeeOptionsMap = {
  [EmployeeType.COMMISSIONED]: CommissionedOptions;
  [EmployeeType.HOURLY]: HourlyOptions;
  [EmployeeType.SALARIED]: {};
};

export class Employee<T extends EmployeeType> {
  public name: string;
  public type: T;
  public options: EmployeeOptionsMap[T];

  constructor(name: string, type: T, options: EmployeeOptionsMap[T]) {
    this.name = name;
    this.type = type;
    this.options = options;
  }
}
