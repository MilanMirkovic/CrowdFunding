import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommentarInterface, Commentar } from '../models/commentar.model';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class CommentarService {

  constructor(private http:HttpClient) { }


  saveCommentar(comment:CommentarInterface):Observable<Commentar>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Commentar>('api/commentar',JSON.stringify(comment),{headers});
  }
  deleteCommentar(id:number):Observable<Project>{
    return this.http.delete<Project>(`api/commentar/${id}`);
  }
}

