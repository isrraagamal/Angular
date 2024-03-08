import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEmployee } from 'src/app/models/iemployee';
import { FakeApiEmployeesService } from 'src/app/services/fake-api-employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit, OnDestroy {
  ProductList: IEmployee[] = [];

  constructor(private prodService: FakeApiEmployeesService) {}
  ngOnDestroy(): void {
    this.mySubscription?.unsubscribe();
  }

  mySubscription: Subscription | undefined;
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.mySubscription = this.prodService.getAll().subscribe({
      next: (data) => {
        this.ProductList = data;
      },
    });
  }

  delete(id: number) {
    // call service `delete` method to remove the product with passed parameter `id`
    this.prodService.Delete(id).subscribe(() => {
      this.getData();
    });
  }
}
