import { OrderService } from './../order.service';
import { Item } from './../item-list/item.model';
import { OrderItem } from './../item-list/item/order/order-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-order-list',
  templateUrl: './my-order-list.component.html',
  styleUrls: ['./my-order-list.component.css']
})
export class MyOrderListComponent implements OnInit {
  public myOrderItems : OrderItem[];

  constructor(private orderService : OrderService) { }

  ngOnInit() {
    this.orderService.orderListStatusChange.subscribe((status:String) => this.onRefresh());
    this.onRefresh();
  }

  onRefresh(){
    this.myOrderItems=this.orderService.getAllMyOrders();
  }

}
