import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/app/models/iemployee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: IEmployee | undefined = {
    id: 1,
    name: 'Israa Gamal',
    age :22,
    salary: "20000",
    address :"Beni Suef"

  };

  id: number = 1;
  constructor(
    private activeRoute: ActivatedRoute,
    private proService: EmployeeService,
    private myRouter: Router
  ) {}
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.employee = this.proService.getById(this.id);
  }
}
