import { Item } from './item-list/item.model';
import { OrderItem } from './item-list/item/order/order-item.model';
import { HttpClient } from '@angular/common/http';

import { EventEmitter ,Injectable} from '@angular/core';

@Injectable() 
export class OrderService {
    private orderList: OrderItem[] = [new OrderItem(new Item(1, "green beans", "This is green beans", "http://shop.gerald.ph/content/images/thumbs/0003341_organic-salad-box-single.png",10),20),
    new OrderItem(new Item(4,"Peas","This is peas","https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/1200px-Peas_in_pods_-_Studio.jpg",10),30)
    ]
    constructor(private http: HttpClient){
        
    }
    orderListStatusChange =new EventEmitter<String>();

    getAllMyOrders() {
        // this.orderListStatusChange.emit("searched");
        return this.orderList.slice();
    }

    addToMyOrders(myOrder : OrderItem){
        this.orderList.push(myOrder);
        this.orderListStatusChange.emit("Added New Order");
    }

}