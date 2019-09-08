import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../service/project.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects-of-category',
  templateUrl: './projects-of-category.component.html',
  styleUrls: ['./projects-of-category.component.css']
})
export class ProjectsOfCategoryComponent implements OnInit {

  sub:any;
  id:number;
  projects:Project[];
  constructor(private route: ActivatedRoute,private projectService:ProjectService ) { }

  ngOnInit() {
    this.projectsOfGroup();
  }

  projectsOfGroup(){

    this.sub= this.route.params.subscribe(param =>{
      this.id=+ param['id'];
      this.projectService.projectsOfCategory(this.id).subscribe((res:Project[])=>{ this.projects=res;})
    })
  }

}
