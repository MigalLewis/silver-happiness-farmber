import { Item } from './../item-list/item.model';
import { OrderItem } from './../item-list/item/order/order-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-order-list',
  templateUrl: './my-order-list.component.html',
  styleUrls: ['./my-order-list.component.css']
})
export class MyOrderListComponent implements OnInit {
  item: Item= new Item(4,"Peas","This is peas","https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/1200px-Peas_in_pods_-_Studio.jpg",10);
  orderItem:OrderItem=new OrderItem(this.item,50);
  myOrderItems : OrderItem[]=[this.orderItem];

  constructor() { }

  ngOnInit() {
  }

}
