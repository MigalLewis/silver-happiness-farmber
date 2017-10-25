import { SubscribeService } from './../subscribe.service';
import { OrderItem } from './../item-list/item/order/order-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe-list',
  templateUrl: './subscribe-list.component.html',
  styleUrls: ['./subscribe-list.component.css']
})
export class SubscribeListComponent implements OnInit {

  subscribedItems:OrderItem[];

  constructor(private subscribeService: SubscribeService) {}

  ngOnInit() {
    this.subscribeService.subscribeListStatusChange.subscribe((status:String) => this.onRefresh());
    this.onRefresh();
  }

  onRefresh(){
    this.subscribedItems=this.subscribeService.getAllMyOrders();
  }


}
