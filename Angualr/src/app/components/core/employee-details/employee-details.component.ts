import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEmployee } from 'src/app/models/iemployee';
import { FakeApiEmployeesService } from 'src/app/services/fake-api-employees.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {
  employee: IEmployee | undefined = {
    id: 1,
    name: 'Israa Gamal',
    age: 22,
    salary: "20000",
    address: "Beni Suef"
  };

  id: number = 1;
  constructor(
    private activeRoute: ActivatedRoute,
    private proService: FakeApiEmployeesService,
    private myRouter: Router
  ) { }
  ngOnDestroy(): void {
    this.mySubscription?.unsubscribe();
  }

  mySubscription: Subscription | undefined;

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];

    this.mySubscription = this.proService.getById(this.id).subscribe({
      next: (data) => {
        this.employee = data;
      },
      error: (error) => {
        this.employee = undefined;
      },
    });
  }
}
