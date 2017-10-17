import { Item } from './item.model';
import { EventEmitter } from '@angular/core';

export class CropService {
    private cropList: Item[] = [new Item(1, "green beans", "This is green beans", "http://shop.gerald.ph/content/images/thumbs/0003341_organic-salad-box-single.png",10)
    ]

    getAllCrops() {
        return this.cropList.slice();
    }

}