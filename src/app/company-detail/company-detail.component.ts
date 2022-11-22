import { Component,OnInit} from '@angular/core';
import { an } from 'chart.js/dist/chunks/helpers.core';
import { HttpCallService } from '../http-call.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit{
  studentList:any;
  studentName:string='';
  showModal:boolean=false;
  interviewStatus:any="Pending";
  updatedStudentData:any;
  levels:any = [
    {value: "Pending", name: "Pending"},
    {value: "Rejected", name: "Rejected"},
    {value:"Selected",name:"Selected"}
];
adminUser:boolean=false;
  constructor(public httpCallService:HttpCallService){

  }
  ngOnInit(): void {
    this.getStudentList();
    if(localStorage.getItem("adminUser")=="admin"){
      this.adminUser = true;
    }

  }

  getStudentList():any{
    this.httpCallService.getStudentAll().subscribe((res)=>{
      this.studentList = res;   
     })
  }
  public hideUpdateform():void{
    this.showModal=false;
  }
  searchStudent(data:any):any{
    console.log(data);
  }

  manageResult(data:any){
    console.log(data);
    this.updatedStudentData =data;
    this.showModal=true;

  }
  onUpdateResult(data:any){
    this.updatedStudentData.interviewStatus=data;
    console.log(this.updatedStudentData);
    this.httpCallService.updateStudent(this.updatedStudentData.id,this.updatedStudentData).subscribe((res)=>{
      console.log(res);
      this.showModal=false;
      this.getStudentList();
    })
  }
}
