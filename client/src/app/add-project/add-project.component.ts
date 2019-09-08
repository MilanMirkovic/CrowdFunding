import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../service/project.service';
import { User, UserInterface } from '../models/user.model';
import { AuthenticationService } from '../security/authentication.service';
import { Router } from '@angular/router';
import { CategoryService } from '../service/category.service';
import { CategoryType } from '../models/category.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  newProject:Project;
  username:string;
  user:UserInterface;
  categories:CategoryType[];
  constructor(private projectService:ProjectService, private authenticationService:AuthenticationService, private route:Router, private categoryService:CategoryService) { 
    this.newProject= new Project({
      name:'',
      imageUrl:'',
      videoUrl:'',
      description:'',
      aboutProject:'',
      moneyTarget:0,
      user:{},
      category:{}
    })
  }

  ngOnInit() {
    this.fillCategories();
    this.getUserName();
    this.completeUser();
  }

  getUserName(){
    this.username= this.authenticationService.getUser();
  
    }
  
    completeUser(){
      this.projectService.getUser(this.username).subscribe((res:UserInterface)=>{
        this.user=res;
        
      })
    }
  saveProject(){
    this.newProject.user=this.user;
    this.projectService.saveProject(this.newProject).subscribe((res:Project)=>{
      this.route.navigate(["/main"]);
    })
  }

  fillCategories(){
    this.categoryService.getCategories().subscribe((res:CategoryType[])=>{
      this.categories=res;
    })
  }

}
