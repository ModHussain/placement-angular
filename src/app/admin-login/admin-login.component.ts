import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  
  adminData:any={
    username:'',
    password:''
  }
  LoginSuccess:boolean=false;
  constructor(public router: Router){

  }
  ngOnInit(): void {
    if(localStorage.getItem("adminUser")=="admin"){
      this.LoginSuccess = true;
    }

  }
  adminLogin(data:any){
    if(data.username==="admin" && data.password==="admin"){
      localStorage.setItem("adminUser","admin");
      this.adminData={
        username:'',
        password:''
      }
      window.location.reload();
      this.LoginSuccess = true;
    } else{
      alert("Incorrect Admin User !please try again");
    }
  }
}
