import { Injectable } from '@angular/core';
import { IEmployee } from '../models/iemployee';
import { EmployeeList } from '../models/employee-list';

@Injectable({
  providedIn: 'root',
}) 
export class EmployeeService {
  employee: IEmployee[] | undefined;
  constructor() {
    this.employee = EmployeeList;
  }

  getAll(): IEmployee[] | undefined {
    return this.employee;
  }

  getById(id: number): IEmployee | undefined {
    return this.employee?.find((p) => p.id == id);
  }

  counter: number = 20;
  add(item: IEmployee) {
    var product = { ...item };
    product.id = ++this.counter;

    this.employee?.push(product);
  }
}
