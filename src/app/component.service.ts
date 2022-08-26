import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  data: any;

  constructor() { }

  SetData(data: any): void {
    this.data = data;
  }

  GetData(): any {
    return this.data;
  }
}
