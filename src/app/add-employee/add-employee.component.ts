import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public id: any;
  public name: any;
  public dob: any;
  public emailId: any;
  public dept: any;
  public doj: any;
  public loc: any;
  public type: any;

  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.id = '';
    this.name = '';
    this.dob = '';
    this.emailId = '';
    this.dept = '';
    this.doj = '';
    this.loc = '';
    this.type = 0;
  }

  AddEmployee(): void {
    this.apiService.PostDataToAPI(this.id, this.name, this.dob, this.emailId, this.dept, this.doj, this.loc, this.type).subscribe(
      () => { this.route.navigateByUrl('/homepage'); },
      (error: any) => { console.log(error); }
    );
  }

}
