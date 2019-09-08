import { Injectable } from '@angular/core';
import { Update } from '../models/update.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient) { }


  public saveUpdate(update:Update):Observable<Update>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Update>('api/update',JSON.stringify(update),{headers});
  }

  public delete(id:number):Observable<Update>{
    return this.http.delete<Update>(`api/update/${id}`);
  }
}
