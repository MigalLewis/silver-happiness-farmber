import { OrderItem } from './../../item-list/item/order/order-item.model';
import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-subscribe-item',
  templateUrl: './subscribe-item.component.html',
  styleUrls: ['./subscribe-item.component.css']
})
export class SubscribeItemComponent implements OnInit {

  @Input() mySubscription :OrderItem;

  constructor() { }

  ngOnInit() {
  }

}
