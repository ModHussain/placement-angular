import { Component,OnInit} from '@angular/core';
import { an } from 'chart.js/dist/chunks/helpers.core';
import { HttpCallService } from '../http-call.service';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit{

feedBackList:any;
feedBackData:any={
  name:'',
  message:'',
  mobileNumber:''
}
constructor(public httpCallService:HttpCallService){

}
ngOnInit(): void {
  this.getAllFeedBack();
}

getAllFeedBack(){
  this.httpCallService.getAllFeedbacks().subscribe((res)=>{
    this.feedBackList = res;
  })
}

submitFeedBack(data:any){
  this.httpCallService.createFeedBack(data).subscribe((res)=>{
    console.log(res);
    this.getAllFeedBack();
    this.feedBackData={
      name:'',
      message:'',
      mobileNumber:''
    }
  })
}

}
