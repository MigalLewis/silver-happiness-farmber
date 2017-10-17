import { Item } from './../../item.model';

export class OrderItem{
    public item :Item;
    public amount:number;
    public total:number;

    constructor(item :Item,amount :number){
        this.item=item;
        this.amount=amount;
        this.total=this.calculateTotal();
    }

    calculateTotal(){
        return this.item.price*this.amount;
    }
}