import { Item } from './item.model';
import { EventEmitter } from '@angular/core';

export class CropService {
    private cropList: Item[] = [new Item(1, "green beans", "This is green beans", "http://shop.gerald.ph/content/images/thumbs/0003341_organic-salad-box-single.png",10),
    new Item(4,"Peas","This is peas","https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/1200px-Peas_in_pods_-_Studio.jpg",10)
    ]

    getAllCrops() {
        return this.cropList.slice();
    }

}