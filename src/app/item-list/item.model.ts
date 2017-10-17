export class Item{
    public id :number;
    public name :String;
    public description :String;
    public imagePath :String;
    public price :number;

    constructor(id :number,name :String, description :String,imagePath :String ,price:number){
        this.id=id;
        this.name=name;
        this.description=description;
        this.imagePath=imagePath;
        this.price=price;
    }
}