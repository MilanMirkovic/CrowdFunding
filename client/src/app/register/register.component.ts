import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usersInSystem:User[];
  existingUser:boolean;
  newUser:User;
  constructor(private http:HttpClient,private router: Router,private userService:UserService) { 
    this.newUser =new  User ({
      firstName:'',
      lastName:'',
      username:'',
      password:'',
    })
    this.existingUser=false;
  }

  ngOnInit() {
    this.getUsers();
  }
  
  getUsers(){
   this.userService.getAllUsers().subscribe((res:User[])=>{
     this.usersInSystem=res;
   })
  }


  register(){
  this.chechUser(this.newUser.username);

    this.userService.register(this.newUser).subscribe((res:any)=>{
      if(!this.existingUser){
      this.router.navigate(['/login']);
      }else{
        this.existingUser=true;
      
      }
      
    })

  }


  chechUser(username:string){
    for(let u of this.usersInSystem){
      if(u.username === username){
        
        this.existingUser=true;
      }else{
        this.existingUser=false
     
      }
    }
  }
}
