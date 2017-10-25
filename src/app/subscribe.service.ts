import { Item } from './item-list/item.model';
import { OrderItem } from './item-list/item/order/order-item.model';
import { HttpClient } from '@angular/common/http';

import { EventEmitter ,Injectable} from '@angular/core';

@Injectable() 
export class SubscribeService {
    private orderItem1 : OrderItem;
    private orderItem2 : OrderItem;
    private orderList: OrderItem[];
    subscribeListStatusChange =new EventEmitter<String>();

    constructor(private http: HttpClient){
        this.orderItem1=new OrderItem(new Item(1, "green beans", "This is green beans", "http://shop.gerald.ph/content/images/thumbs/0003341_organic-salad-box-single.png",10),20);
        this.orderItem1.buyer="pay n pick";
        this.orderItem2=new OrderItem(new Item(4,"Peas","This is peas","https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/1200px-Peas_in_pods_-_Studio.jpg",10),30)
        this.orderItem2.buyer="chess";
        this.orderList = [this.orderItem1,this.orderItem2];
    }

    getAllMyOrders() {
        // this.orderListStatusChange.emit("searched");
        return this.orderList.slice();
    }

    addToMyOrders(myOrder : OrderItem){
        this.orderList.push(myOrder);
        this.subscribeListStatusChange.emit("Added New Oder");
    }

}