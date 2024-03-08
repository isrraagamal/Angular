import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEmployee } from 'src/app/models/iemployee';
import { FakeApiEmployeesService } from 'src/app/services/fake-api-employees.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  myForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    salary: new FormControl(''),
    address: new FormControl(''),

  });

  constructor(
    private prodService: FakeApiEmployeesService,
    private myRouter: Router,
    private actRoute: ActivatedRoute
  ) {}
  ngOnDestroy(): void {
    this.myGetSub?.unsubscribe();
    this.myActionSub?.unsubscribe();
  }
  id: number = 0;

  myGetSub: Subscription | undefined;
  myActionSub: Subscription | undefined;
  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    if (this.id != 0) {
      // edit
     this.myGetSub =  this.prodService.getById(this.id).subscribe((data) => {
        // this.myForm.controls['id'].setValue(data.id);
        this.myForm.controls['name'].setValue(data.name);
        this.myForm.controls['age'].setValue(data.age);
        this.myForm.controls['salary'].setValue(data.salary);
        this.myForm.controls['address'].setValue(data.address);

        //this.myForm.setValue(data);
      });
    }
  }

  get nameControl() {
    return this.myForm.controls['name'];
  }
  get ageControl() {
    return this.myForm.controls['age'];
  }
  get salaryControl() {
    return this.myForm.controls['salary'];
  }
  get addressControl() {
    return this.myForm.controls['address'];
  }

  onSubmit(e: Event) {
    e.preventDefault();
    if (this.myForm.valid) {
      if (this.id) {
        //edit
        this.myActionSub = this.prodService.Edit(this.id, this.myForm.value).subscribe();
      } else {
        // add
        this.myActionSub =  this.prodService.Add(this.myForm.value).subscribe();
      }
      this.myRouter.navigate(['/products']);
    }
  }
}
