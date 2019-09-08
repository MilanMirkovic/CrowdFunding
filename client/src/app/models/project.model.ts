import { UserInterface } from './user.model';
import { DonationInterface } from './donation.model';
import { FaqInterface } from './faq.model';
import { CommentarInterface } from './commentar.model';
import { CategoryTypeInterface, CategoryType } from './category.model';
import { UpdateInterface } from './update.model';

export interface ProjectInterface {

    id?:number;
    name?:string;
    description?:string;
    videoUrl?:string;
    imageUrl?:string;
    user?:UserInterface;
    aboutProject?:string;
    moneyTarget?:number;
    donations?:DonationInterface[];
    faqs?:FaqInterface[];
    comments?:CommentarInterface[];
    category?:CategoryTypeInterface;
    updates?:UpdateInterface[];

}


export class Project implements ProjectInterface{
   
    id?:number;
    name:string;
    moneyTarget:number;
    description:string;
    videoUrl:string;
    imageUrl:string;
    aboutProject:string;
    user:UserInterface;
    donations:DonationInterface[];
    faqs:FaqInterface[];
    comments:CommentarInterface[];
    category:CategoryTypeInterface;
    updates:UpdateInterface[];

    constructor (p : ProjectInterface){
        this.id=p.id;
        this.moneyTarget=p.moneyTarget;
        this.name=p.name;
        this.description=p.description;
        this.videoUrl=p.videoUrl;
        this.imageUrl=p.imageUrl;
        this.user=p.user;
        this.donations=p.donations;
        this.faqs=p.faqs;
        this.aboutProject=p.aboutProject;
        this.comments=p.comments;
        this.category=p.category;
        this.updates=p.updates;
    }

}