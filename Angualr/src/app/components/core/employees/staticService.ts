import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/iemployee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class EmployeesComponent implements OnInit {
  ProductList: IEmployee[] = [];

  constructor(private prodService: EmployeeService) {}

  ngOnInit(): void {
    this.ProductList = this.prodService.getAll() as IEmployee[];
  }

  delete(id:number){
   this.ProductList =   this.ProductList.filter((p)=>p.id != id)
   // call service `delete` method to remove the product with passed parameter `id`
  }
}
