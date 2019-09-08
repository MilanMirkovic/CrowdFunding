import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../security/authentication.service';
import { ProjectService } from '../service/project.service';
import { Project } from '../models/project.model';
import { User, UserInterface } from '../models/user.model';
import { DomSanitizer } from '@angular/platform-browser';

import { SafePipe } from './SafePipe';
import { Donation } from '../models/donation.model';
import { FaqInterface, Faq } from '../models/faq.model';
import { CommentarService } from '../service/commentar.service';
import { CommentarInterface, Commentar } from '../models/commentar.model';
import { FaqService } from '../service/faq.service';
import { UpdateService } from '../service/update.service';
import { Update } from '../models/update.model';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private updateService:UpdateService,private faqService:FaqService,private route: ActivatedRoute, 
    private projectService: ProjectService, private authenticationService:AuthenticationService,private commentService:CommentarService) { 
    
      this.newDonation= new Donation({
      user: {},
      donation: 0,
      project: {}
    })

    this.newCommentar=new Commentar({
      commentar:'',
      user:{},
      project:{}
    })


    this.newFaq=new Faq({
      answer:'',
      question:'',
      project:{}
    })
    
    this.newUpdate=new Update({
      updateDescription:'',
      project:{},
      date:new Date(),

      })
  }

  ngOnInit() {
    this.getProject();
    this.getUserName();
    this.completeUser();

  
    
  
  }

 
  newDonation:Donation;
  newCommentar:Commentar;
  newFaq:Faq;
  newUpdate:Update;
  
  sub: any;
  id: number;
  project: Project;
  
  
  donationSum: number;
  numberOfDonations:number;

  user: UserInterface;
  username:string;
  faqToggle:boolean=false;



  getProject() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];

      this.projectService.getProject(this.id).subscribe((res: Project) => {
        this.project = res;
       this.sumDonations();

      })
    })
  }

  sumDonations() {
    let s:number=0;
    for (let d of this.project.donations) {
      s += d.donation;
    }
    this.numberOfDonations=this.project.donations.length;
    this.donationSum=s;
    
  }

  isLoggedIn():boolean{
    return this.authenticationService.isLoggedIn();
  }


  saveDonation(){
    console.log(this.newDonation.donation);
    this.newDonation.project=this.project;
    this.newDonation.user=this.user;
    
    this.projectService.saveDonation(this.newDonation).subscribe((res:Donation)=>{
      this.getProject();
    })
    console.log(this.newDonation.donation);
  }



  getUserName(){
    this.username= this.authenticationService.getUser();
  
    }
  
    completeUser(){
      this.projectService.getUser(this.username).subscribe((res:UserInterface)=>{
        this.user=res;
        
      })
    }

    checkUser(){
      if(this.username === this.project.user.username){
        return true;
      }else{
        return false;
      }
    }



    divs = ["Menu1", "Menu2", "Menu3", "Menu4"];
    visibleDivId = null;
    
    toggleVisibility(divId) {
      if(this.visibleDivId === divId) {
        this.visibleDivId = null;
      } else {
        this.visibleDivId = divId;
      }
      this.hideNonVisibleDivs();
    }
     hideNonVisibleDivs() {
      var i, divId, div;
      for(i = 0; i < this.divs.length; i++) {
        divId = this.divs[i];
        div = document.getElementById(divId);
        if(this.visibleDivId === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }


    addComment(){
      this.newCommentar.project=this.project;
      this.newCommentar.user=this.user;
      this.commentService.saveCommentar(this.newCommentar).subscribe((res:Commentar) => {
        this.getProject();
        this.newCommentar=new Commentar({
          commentar:'',
          user:{},
          project:{}
        })
      })

    }

    deleteComment(comment:Commentar){
      this.commentService.deleteCommentar(comment.id).subscribe((res:Project)=>{
        this.getProject();
      })
    }
    addFaq(){
      this.newFaq.project=this.project;
      this.faqService.saveFaq(this.newFaq).subscribe((res:Faq)=>{
        this.getProject();
      })
    }

    addFaqToggle(){
      this.faqToggle = !this.faqToggle;
    }

    deleteFaq(f:Faq){
      this.faqService.deleteFaq(f.id).subscribe((res:Project)=>{
        this.getProject();
      })
    }

    addUpdate(){
      this.newUpdate.date=new Date();
      this.newUpdate.project=this.project;

      this.updateService.saveUpdate(this.newUpdate).subscribe((res:Update)=>{
        this.getProject();
      })
    }
}
