import { PushNotificationsService } from 'angular2-notifications';


import { EventEmitter ,Injectable,Output} from '@angular/core';

@Injectable() 
export class NotifyService {
    public notify: EventEmitter<any>;

    constructor(private _pushNotifications: PushNotificationsService){
        _pushNotifications.requestPermission();
        this.notify=new EventEmitter<any>();
        this.notify.subscribe(this.onNotify());
      }
    
    onNotify(){ 
        let options = {
          body: "There are new items available",
          icon: "assets/logo.png" 
        }
        let notify = this._pushNotifications.create('New Order', options).subscribe( 
        );
    }

}