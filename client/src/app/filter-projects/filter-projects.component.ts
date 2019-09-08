import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../security/authentication.service';
import { ProjectService } from '../service/project.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-filter-projects',
  templateUrl: './filter-projects.component.html',
  styleUrls: ['./filter-projects.component.css']
})
export class FilterProjectsComponent implements OnInit {


  sub:any;
  id:number;
  name:String;
  project:Project[];
  categoryId:number;

  constructor(private route: ActivatedRoute,private http:HttpClient,private authenticationService: AuthenticationService,private projectService:ProjectService) {  console.log(this.categoryId, this.name) }

  ngOnInit() {
    console.log(this.name);   
    this.filterProjects();
  }

  filterProjects(){
    this.sub= this.route.params.subscribe(params =>{
      this.id=+params['id'];
      this.name=params['name'];
      this.projectService.filterProjects(this.id, this.name).subscribe((res:Project[])=>{
        this.project=res;
        console.log(this.id, this.name)
      });
    })
  }
}
