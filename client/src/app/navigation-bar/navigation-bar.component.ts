import { Component, OnInit, Input,Output } from '@angular/core';

import { CategoryType } from '../models/category.model';
import { CategoryService } from '../service/category.service';
import { AuthenticationService } from '../security/authentication.service';
import { Router } from '@angular/router';
import { Filter } from '../models/filter';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  @Input() 

  newFilter:Filter;
  id:number;
  name:String;
  categories:CategoryType[];
  naziv:string;
 

 
  constructor(private categoryService: CategoryService,
    private authenticationService: AuthenticationService,
              private router: Router) { 
                this.id=1;
                this.name='';
              }



  ngOnInit() {
    this.getCategories();
   
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((res:CategoryType[])=>{this.categories=res});
  }


  logout():void{
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn():boolean{
    return this.authenticationService.isLoggedIn();
  }
  
  resetFilter(){
    this.id=0;
    this.name='';
    this.router.navigate(['/main']);
  }



}
