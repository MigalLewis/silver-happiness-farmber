import { Item } from './../item.model';
import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;

  constructor(private router : Router) {
  }

  ngOnInit() {

  }
  onSubscribe() {
    
  }
  onOrder() {
    this.router.navigate(['order',this.item.id]);
  }

}
