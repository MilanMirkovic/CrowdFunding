import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { Donation } from '../models/donation.model';
import { UserInterface } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  getRandomProjects():Observable<Project[]>{
    return this.http.get<Project[]>('api/random/projects')
  }
  
  getProject(id:number):Observable<Project>{

    return this.http.get<Project>(`api/projects/${id}`);
  }


  filterProjects(id:number, name:String): Observable<Project[]>{
    return this.http.get<Project[]>(`api/projects/filter/${id}?project=${name}`)
  }

  projectsOfCategory(id:number): Observable<Project[]>{
    return this.http.get<Project[]>(`api/projects/category/${id}`);
  }

  saveDonation(donation:Donation):Observable<Donation>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Donation>('api/donation',JSON.stringify(donation),{headers});
  }


    getUser(user:string): Observable<UserInterface>{
    return this.http.get<UserInterface>(`/api/user/${user}`);
  }

  saveProject(project:Project):Observable<Project>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Project>('api/projects',JSON.stringify(project),{headers});
  }
}


