import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DrivesPageComponent } from './drives-page/drives-page.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NgChartsModule } from 'ng2-charts';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCompanyComponent,
    CompanyDetailComponent,
    CompanyListComponent,
    HomePageComponent,
    AboutUsComponent,
    DrivesPageComponent,
    FeedBackComponent,
    AdminLoginComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
