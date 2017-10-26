import { CropService } from './../../crop.service';
import { OrderService } from './../../../order.service';
import { Item } from './../../item.model';
import { OrderItem, Status } from './order-item.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  item: Item;
  orderItem:OrderItem;

  constructor(private oderService : OrderService,private route : ActivatedRoute,private cropService : CropService ) { }

  ngOnInit() {
    var id=this.route.snapshot.params['id'];
    this.item=this.cropService.getCrop(id);
    this.orderItem=new OrderItem(this.item,0);
  }

  onOrder(){
    console.log("In here and odering");
    this.orderItem.status=Status.BIDDING;
    this.orderItem.buyer="Silkworths";
    this.oderService.addToMyOrders(this.orderItem);
  }


}
