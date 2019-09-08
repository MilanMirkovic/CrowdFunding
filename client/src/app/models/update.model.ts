import { ProjectInterface } from './project.model';

export interface UpdateInterface{
    id?:number;
    updateDescription?:string;
    date?:Date;
    project?:ProjectInterface;
}


export class Update implements UpdateInterface{
    id:number;
    updateDescription:string;
    date:Date;
    project:ProjectInterface;

    constructor(u:UpdateInterface){
        this.id=u.id;
        this.updateDescription=u.updateDescription;
        this.date=u.date;
        u.project=u.project;
    }
 }