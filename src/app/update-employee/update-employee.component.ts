import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ComponentService } from '../component.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  public id: any;
  public name: any;
  public dob: any;
  public emailId: any;
  public dept: any;
  public doj: any;
  public loc: any;
  public type: any;

  private emp: Employee;

  constructor(private apiService: ApiService, private route: Router, private componentService: ComponentService) { }

  ngOnInit(): void {
    this.id = this.componentService.GetData();
    this.apiService.GetDataByIdFromAPI(this.id).subscribe(
      (data: any) => {
        this.name = data.name;
        this.dob = data.dob;
        this.emailId = data.emailId;
        this.dept = data.dept;
        this.doj = data.doj;
        this.loc = data.loc;
        this.type = data.type;
      },
      (error: any) => { console.log("Id does not exist!!"); }
    );
  }

  UpdateEmployee(): void {
    this.apiService.UpdateDataToAPI(this.id, this.name, this.dob, this.emailId, this.dept, this.doj, this.loc, this.type).subscribe(
      () => { this.route.navigateByUrl('/homepage'); },
      (error: any) => { console.log(error); }
    )
  }
}
