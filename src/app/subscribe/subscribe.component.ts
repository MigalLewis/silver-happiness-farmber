import { Item } from './../item-list/item.model';
import { SubscribeItem } from './subscribe.model';
import { CropService } from './../item-list/crop.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  item: Item;
  subcribeItem : SubscribeItem;


  constructor(private route : ActivatedRoute,private cropService : CropService) { }

  ngOnInit() {
    var id=this.route.snapshot.params['id'];
    this.item=this.cropService.getCrop(id);
    this.subcribeItem=new SubscribeItem(this.item,0,0);
  }

}
