import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { DrivesPageComponent } from './drives-page/drives-page.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home-page' },
  { path: 'company-list', component: CompanyListComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'drive-result', component: CompanyDetailComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'drives-info', component: DrivesPageComponent },
  { path: 'feedBack', component: FeedBackComponent },
  { path: "admin-login", component: AdminLoginComponent },
  { path: "apply-now", component: StudentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
