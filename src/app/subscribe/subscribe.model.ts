import { Item } from './../item-list/item.model';

export class SubscribeItem{
    public item :Item;
    public minAmount:number;
    public maxAmount:number;

    constructor(item :Item,minAmount :number,maxAmount :number){
        this.item=item;
        this.minAmount=minAmount;
        this.maxAmount=maxAmount;
    }


}