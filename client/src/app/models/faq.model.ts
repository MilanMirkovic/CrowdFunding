import { ProjectInterface } from './project.model';

export interface FaqInterface{
    id?:number;
    answer?:string;
    question:string;
    project?:ProjectInterface;
}


export class Faq implements FaqInterface{
    id: number;   
     answer: string;
    question: string;
    project:ProjectInterface;


    constructor(f:FaqInterface){
        this.id=f.id;
        this.answer=f.answer;
        this.question=f.question;
        this.project=f.project;
    }
}