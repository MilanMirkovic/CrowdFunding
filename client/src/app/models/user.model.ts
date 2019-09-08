export interface UserInterface{
    id?:number;
    firstName?:string;
    lastName?:string;
    username?:string;
    password?:string;
 

}

export class User implements UserInterface{
    id:number;
    firstName:string;
    lastName:string;
    username:string;
    password:string;
   


    constructor(ucf:UserInterface){
        this.id=ucf.id;
        this.firstName=ucf.firstName;
        this.lastName=ucf.lastName;
        this.username=ucf.username;
        this.password=ucf.password;
       
    }

}