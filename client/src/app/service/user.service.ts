import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>('api/users');
  }

  register(user:User):Observable<User>{
    let headers=new HttpHeaders({'Content-Type':'application/json'});
     return this.http.post<User>('api/register',JSON.stringify(user),{headers});
  }
  
}


