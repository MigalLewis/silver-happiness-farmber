import { CropService } from './crop.service';
import { Item } from './item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [CropService]
})
export class ItemListComponent implements OnInit {
  itemList :Item[];
  constructor(private cropService: CropService ) {

   }

  ngOnInit() {
    this.itemList=this.cropService.getAllCrops();
  }

}
