import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Faq } from '../models/faq.model';
import { Project } from '../models/project.model';
@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http:HttpClient) { }

  saveFaq(faq:Faq):Observable<Faq>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Faq>('api/faq', JSON.stringify(faq), {headers});
  }

  deleteFaq(id:number):Observable<Project>{
   return this.http.delete<Project>(`api/faq/${id}`);
  }
}
