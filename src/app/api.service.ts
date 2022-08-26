import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EmployementType } from './employement-type';

//Service class to communicate with the API service
@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl: string = 'http://localhost:9800/employees';     //url of the API service

  constructor(private httpClient: HttpClient) { }

  //Get employee list from the API
  GetDataFromAPI(): any {
    var headers = { 'Content-Type': 'application/json' };
    return this.httpClient.get(this.apiUrl, { headers }).pipe(map((res: any) => res));
  }

  //Get employee by Id
  GetDataByIdFromAPI(id: number): any {
    var headers = { 'Content-Type': 'application/json' };
    return this.httpClient.get(this.apiUrl + "/" + id, { headers }).pipe(map((res: any) => res));
  }

  //Add a new employee
  PostDataToAPI(id: number, name: string, dob: string, emailId: string, dept: string, doj: string, loc:string, type: EmployementType): any {
    var body: any = {
      "id": id, "name": name,
      "dob": dob, "emailId": emailId,
      "dept": dept, "doj": doj, "loc": loc,
      "type": type
    };
    var headers = { 'Content-Type': 'application/json' };
    return this.httpClient.post(this.apiUrl, body, { headers }).pipe(map((res: any) => res));
  }

  //Update an existing employee
  UpdateDataToAPI(id: number, name: string, dob: string, emailId: string, dept: string, doj: string, loc: string, type: EmployementType): any {
    var body: any = {
      "id": id, "name": name,
      "dob": dob, "emailId": emailId,
      "dept": dept, "doj": doj, "loc": loc,
      "type": type
    };
    var headers = { 'Content-Type': 'application/json' };
    return this.httpClient.put(this.apiUrl + '/' + id, body, { headers }).pipe(map((res: any) => res));
  }

  //Delete an existing employee
  DeleteDataFromAPI(data: number): any {
    var headers = { 'Content-Type': 'application/json' };
    return this.httpClient.delete(this.apiUrl + '/' + data, { headers }).pipe(map((res: any) => res));
  }
}
