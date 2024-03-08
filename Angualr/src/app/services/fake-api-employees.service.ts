import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/iemployee';

@Injectable({
  providedIn: 'root',
})
export class FakeApiEmployeesService {
  baseURL: string = 'http://localhost:3002/employees';
  constructor(private http: HttpClient) { }

  getAll(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.baseURL);
  }

  getById(id: number): Observable<IEmployee> {
    return this.http.get<IEmployee>(`${this.baseURL}/${id}`);
  }

  Add(prod: IEmployee) {
    return this.http.post(this.baseURL, prod);
  }

  Edit(id: number, prod: IEmployee) {
    return this.http.put(`${this.baseURL}/${id}`, prod);
  }

  Delete(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  testObservable(): Observable<string> {
    console.log('test function called');

    let myObservable = new Observable<string>((observer) => {


      console.log('observable called');
      observer.next('first data');

      if (false) {

        observer.error('This is an error!');
      }
      observer.next('second data');


      return {
        unsubscribe() {
          console.log('End subscription');
        },
      };
    });

    return myObservable;
  }
}
