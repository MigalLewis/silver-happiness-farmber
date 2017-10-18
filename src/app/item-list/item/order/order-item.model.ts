import { Item } from './../../item.model';
export enum Status {
    POSSIBLE,
    PENDING,
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

    constructor(item :Item,amount :number){
        this.item=item;
        this.amount=amount;
        this.total=this.calculateTotal();
        this.status=Status.POSSIBLE;
        this.statusValue=this.getStatusValue();
    }

    calculateTotal(){
        return this.item.price*this.amount;
    }

    getStatusValue(){
        var myNumber:number = this.status;

        return Status[myNumber];
    }
}