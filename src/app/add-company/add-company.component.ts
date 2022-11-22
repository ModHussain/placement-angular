import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCallService } from '../http-call.service';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit  {
  companyForm: FormGroup;
  logoImg:string=""
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private httpCallService: HttpCallService
  ) { 
    this.companyForm = this.formBuilder.group({
      name: [''],
      logo: [''],
      location: [''],
      email:[''],
      info:['']
    })
  }

  ngOnInit() { }
  onSubmit(): any {
    this.httpCallService.create(this.companyForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/company-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
