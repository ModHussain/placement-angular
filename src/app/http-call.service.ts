import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError,BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpCallService {
  constructor(private http: HttpClient) { }
  companyData:any = new BehaviorSubject({});
  COMPANY_REST_API: string = 'http://localhost:8000/api/company';
  student_api: string = 'http://localhost:8000/api/student';
  feedBack_api : string = 'http://localhost:8000/api/feedback'
  // Http Header
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.COMPANY_REST_API);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.COMPANY_REST_API}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.COMPANY_REST_API, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.COMPANY_REST_API}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.COMPANY_REST_API}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.COMPANY_REST_API);
  }

  findByName(name: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.COMPANY_REST_API}?name=${name}`);
  }

  getStudentAll(): Observable<any[]> {
    return this.http.get<any[]>(this.student_api);
  }

  getStudent(id: any): Observable<any> {
    return this.http.get(`${this.student_api}/${id}`);
  }

  createStudent(data: any): Observable<any> {
    return this.http.post(this.student_api, data);
  }

  updateStudent(id: any, data: any): Observable<any> {
    return this.http.put(`${this.student_api}/${id}`, data);
  }

  deleteStudent(id: any): Observable<any> {
    return this.http.delete(`${this.student_api}/${id}`);
  }

  setCompanyData(data:any):void{
    this.companyData.next(data);
  }

  getCompanyData():Observable<any>{
    return this.companyData.asObservable();
  }

  getAllFeedbacks(): Observable<any[]> {
    return this.http.get<any[]>(this.feedBack_api);
  }

  createFeedBack(data: any): Observable<any> {
    return this.http.post(this.feedBack_api, data);
  }
}
