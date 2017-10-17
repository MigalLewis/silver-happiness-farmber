import { Item } from './item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  itemList :Item[]=[new Item(1,"green beans","This is green beans","http://shop.gerald.ph/content/images/thumbs/0003341_organic-salad-box-single.png")]

  constructor() { }

  ngOnInit() {
  }

}
