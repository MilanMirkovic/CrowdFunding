import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  randomProjects:Project[];
  constructor(private projectService:ProjectService) { }

  ngOnInit() {
    this.getRandomProjects();
  }

  getRandomProjects(){
    this.projectService.getRandomProjects().subscribe((res:Project[]) =>{this.randomProjects=res;})

  }
}
