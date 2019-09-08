export class Filter implements FilterInterface{
id?:number;

name?:String;
constructor(f:FilterInterface){
    this.id=f.id;
    this.name=f.name;
}
}

interface FilterInterface{
    id?:number;
    name?:String;
}