import { OrderItem } from './../../item-list/item/order/order-item.model';
import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-my-oder-item',
  templateUrl: './my-oder-item.component.html',
  styleUrls: ['./my-oder-item.component.css']
})
export class MyOderItemComponent implements OnInit {

  @Input() myOrder : OrderItem;

  constructor() { }

  ngOnInit() {
    console.log(this.myOrder);
  }

}
