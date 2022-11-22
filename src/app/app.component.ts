import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'placement-frontend';
  adminUser= false;
  constructor(){

  }
  ngOnInit(){
    if(localStorage.getItem("adminUser")=="admin"){
      this.adminUser = true;
    }
  }
  logout(){
    localStorage.clear();
    window.location.href="http://localhost:8080/login?logout";
  }
}
