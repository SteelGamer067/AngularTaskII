import { EmployementType } from "./employement-type";

export interface Employee {
  id: number; name: string;
  dob: string; emailId: string;
  dept: string; doj: string; loc: string;
  type: EmployementType;
}
