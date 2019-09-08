export interface CategoryTypeInterface {
    id?:number;
    name?:string;
}


export class CategoryType implements CategoryTypeInterface{

    id?:number;
    name:string;

    constructor(c: CategoryTypeInterface){
        this.id=c.id;
        this.name=c.name;
    }
}