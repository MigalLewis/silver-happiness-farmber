export class Item{
    public id :number;
    public name :String;
    public description :String;
    public imagePath :String;

    constructor(id :number,name :String, description :String,imagePath :String){
        this.id=id;
        this.name=name;
        this.description=description;
        this.imagePath=imagePath;
    }
}