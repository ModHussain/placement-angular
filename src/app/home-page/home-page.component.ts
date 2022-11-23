import { Component,OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration ,Chart, registerables } from 'chart.js';
import { HttpCallService } from '../http-call.service';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartLegend = true;
  public barChartPlugins = [];
  public companyCountValue =true;
  public groupCountValue =false;
  public showModal=false;
  public studentCompanyData:any={
    labels:[],
    count:[]
  };
  public studentLabel:any=[];
  public studentCount:any=[];
  public groupLabel:any=[];
  public groupCount:any=[]
  public studentCompany: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      { data:[], 
        label: 'Count',
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgba(201, 203, 207)'
        ],
       }
    ]
  };

  public groupStudent: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      { data: [], 
        label: 'Data',
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgba(201, 203, 207)'
        ],
       }
    ]
  };
  
  constructor( public httpCallService: HttpCallService){
    Chart.register(...registerables);
  }
  ngOnInit(): void {
    this.getStudentCompanyData();
    this.getGroupStudent()
  }
  companyCountData(){
    this.groupCountValue=false;
    this.companyCountValue=true;
    this.studentLabel=[];
    this.studentCount=[];
    this.getStudentCompanyData();
    this.chart?.update();
  }

  groupCountData(){
    this.groupCountValue=true;
    this.companyCountValue=false;
    this.groupLabel=[];
    this.groupCount=[];
    this.getGroupStudent();
    this.chart?.update();
  }

  getStudentCompanyData(){
    this.httpCallService.getstudentCompany().subscribe((res)=>{
      console.log(res);
      res.map(data=>{
        this.studentLabel.push(data.companyName);
        this.studentCount.push(data.placedCount)
      })
      this.studentCompany.labels=this.studentLabel;
      this.studentCompany.datasets[0].data=this.studentCount;
      this.chart?.update();
    })
    
  }

  getGroupStudent(){
    this.httpCallService.getgroupStudent().subscribe((res)=>{
      console.log(res);
      res.map(data=>{
        this.groupLabel.push(data.groupName);
        this.groupCount.push(data.placedCount)
      })
      this.groupStudent.labels=this.groupLabel;
      this.groupStudent.datasets[0].data=this.groupCount;
      this.chart?.update();
    })
    
  }

}
