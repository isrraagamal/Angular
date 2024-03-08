import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeApiEmployeesService } from 'src/app/services/fake-api-employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy{
  constructor(private fakeProduct: FakeApiEmployeesService) {}
  ngOnDestroy(): void {
    this.myObservableTest?.unsubscribe();
  }

  myObservableTest: Subscription | undefined;
  ngOnInit(): void {
    this.myObservableTest = this.fakeProduct.testObservable().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }
}
