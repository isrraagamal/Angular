import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { EmployeesComponent } from './components/core/employees/employees.component';
import { EmployeeDetailsComponent } from './components/core/employee-details/employee-details.component';
import { ProductFormComponent } from './components/core/product-form/product-form.component';
import { ContactsComponent } from './components/core/contacts/contacts.component';
import { LoginComponent } from './components/core/login/login.component';
import { NotFoundComponent } from './components/core/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/core/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    ProductFormComponent,
    ContactsComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
