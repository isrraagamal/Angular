import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { EmployeeDetailsComponent } from './components/core/employee-details/employee-details.component';
import { ProductFormComponent } from './components/core/product-form/product-form.component';
import { LoginComponent } from './components/core/login/login.component';
import { ContactsComponent } from './components/core/contacts/contacts.component';
import { NotFoundComponent } from './components/core/not-found/not-found.component';
import { authenticationGuard } from './services/authentication.guard';
import { EmployeesComponent } from './components/core/employees/employees.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: EmployeesComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: 'products/details/:id',
    component: EmployeeDetailsComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: 'products/add',
    component: ProductFormComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: 'products/edit/:id',
    component: ProductFormComponent,
    canActivate: [authenticationGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
