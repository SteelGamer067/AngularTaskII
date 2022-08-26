import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from '../component.service';
import { ApiService } from './../api.service';
import { Employee } from './../employee';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  public employees: Employee[] = [];

  constructor(private apiService: ApiService, private componentservice: ComponentService, private route: Router) { }

  ngOnInit(): void {
    this.apiService.GetDataFromAPI().subscribe(
      (data: any) => { for (let d of data) this.employees.push(d); },
      () => { throw new Error("No employee data exists!"); }
    );
  }

  UpdateDetails(id: number) {
    this.componentservice.SetData(id);
    this.route.navigateByUrl("/update-employee");
  }

  DeleteEmployee(id: number) {
    this.apiService.DeleteDataFromAPI(id).subscribe(
      () => { this.route.navigateByUrl('/view-employees'); },
      (error: any) => { console.log(error); }
    )
  }
}
