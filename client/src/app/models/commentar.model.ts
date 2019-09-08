import { ProjectInterface } from './project.model';
import { UserInterface } from './user.model';

export interface CommentarInterface{
    id?:number;
    commentar?:string;
    project?:ProjectInterface;
    user?:UserInterface;
}

export class Commentar implements CommentarInterface{

    id:number;
    commentar:string;
    project:ProjectInterface;
    user:UserInterface;
    
    constructor(c:CommentarInterface){
        this.id=c.id;
        this.commentar=c.commentar;
        this.project=c.project;
        this.user=c.user;
    }
}