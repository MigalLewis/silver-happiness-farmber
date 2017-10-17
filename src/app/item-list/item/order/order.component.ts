import { Item } from './../../item.model';
import { OrderItem } from './order-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  item: Item= new Item(4,"Peas","This is peas","https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/1200px-Peas_in_pods_-_Studio.jpg",10);
  orderItem:OrderItem=new OrderItem(this.item,0);

  constructor() { }

  ngOnInit() {
  }

}
