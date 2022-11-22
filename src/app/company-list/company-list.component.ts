import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../http-call.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit{
  Company:any=[];
  filteredData: any = [];
  showModal:boolean=false;
  companyName:string='';
  companyData: any={
    name:'',
    location:'',
    email:'',
    logo:'',
    info:''
  };
  adminUser:boolean=false;
  noRecord:boolean=false;
  ngOnInit(): void {
    this.getCompanys();
    if(localStorage.getItem("adminUser")=="admin"){
      this.adminUser = true;
    }
  }
  constructor(public httpService:HttpCallService,
              public router :Router){

  }


  
  public getCompanys():void{
    this.noRecord=false;
    this.httpService.getAll().subscribe((res)=>{
      this.Company =res;
      this.filteredData = res;
    })
  }
  public hideUpdateform():void{
    this.showModal=false;
  }

  public applyNow(data:any):void{
    let companyInfo={
        "name":data.name,
        "logo":data.logo,
        "info":data.info
    }
    this.httpService.setCompanyData(companyInfo);
    localStorage.setItem("companyInfo",JSON.stringify(companyInfo));
    this.router.navigateByUrl("/apply-now");
  }

  public searchCompany(data:any){
    console.log(data);
    this.noRecord=false;
    let searchedData=this.Company.filter((res:any)=>res.name.toLowerCase()==data.toLowerCase().toString())
    console.log(searchedData);
    if(searchedData.length==0){
      this.noRecord=true;
      return;
    }
    this.Company = searchedData;
  }

  public editCompany(id:any):void{
    this.showModal= true;
    this.httpService.get(id).subscribe((res)=>{
      this.companyData = res;
    })
  }

  public onUpdateSubmit(data:any):void{
    console.log(data);
    this.httpService.update(data.id,data).subscribe((res)=>{
      console.log(res);
      this.hideUpdateform();
      this.getCompanys();
    })
    
  }

  public deleteCompany(id:any):void{
      this.httpService.delete(id).subscribe((res)=>{
        console.log(res);
        this.getCompanys();
      })
  }

}
