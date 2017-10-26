import { Item } from './../../item.model';
export enum Status {
    PROSPECT,
    BIDDING,
    ACCEPTED,
    ON_DELEVERY,
    CANCELED
}

export class OrderItem{
    public item :Item;
    public amount:number;
    public status:Status;
    public statusValue:string;
    public total:number;
    public buyer:String;
    public seller:String;

    constructor(item :Item,amount :number){
        this.item=item;
        this.amount=amount;
        this.total=this.calculateTotal();
        this.status=Status.BIDDING;
        this.statusValue=this.getStatusValue();
        this.buyer="";
        this.seller="";
    }

    calculateTotal(){
        return this.item.price*this.amount;
    }

    getStatusValue(){
        var myNumber:number = this.status;

        return Status[myNumber];
    }
}