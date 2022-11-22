import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../http-call.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  companyInfo:any;
  studentInfo:any={
    studentName:'',
    studentId:'',
    mobileNumber:'',
    group:'',
    emailId:'',
    tenthMarks:'',
    boardMarks:'',
    companyName:''
  };
  hideForm:boolean=true;
  successResult:boolean=false;
  constructor(public httpCallService: HttpCallService){
  }

  ngOnInit(): void {
    this.getCompanyInfo();
  }

  public getCompanyInfo() {
    let data:any = localStorage.getItem("companyInfo");
    this.companyInfo = JSON.parse(data);
  }

  public onSubmitStudent(data:any){
     data.companyName = this.companyInfo.name
    this.httpCallService.createStudent(data).subscribe((res)=>{
      console.log("info",res);
      this.successResult=true;
      this.hideForm=false;
    })
  }

}
