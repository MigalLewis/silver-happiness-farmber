import { SubscribeService } from './subscribe.service';
import { NotifyService } from './notify.service';
import { CropService } from './item-list/crop.service';
import { OrderService } from './order.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Routes,RouterModule,ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ManageComponent } from './manage/manage.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item-list/item/item.component';
import { OrderComponent } from './item-list/item/order/order.component';
import { MyOrderListComponent } from './my-order-list/my-order-list.component';
import { MyOderItemComponent } from './my-order-list/my-oder-item/my-oder-item.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ProfileComponent } from './profile/profile.component';
import { SubscribeListComponent } from './subscribe-list/subscribe-list.component';
import { SubscribeItemComponent } from './subscribe-list/subscribe-item/subscribe-item.component';
import { AuthorityDirective } from './authority.directive';
import { PushNotificationsModule } from 'angular2-notifications';
import { BiddingDetailsComponent } from './subscribe-list/subscribe-item/bidding-details/bidding-details.component';

const appRoutes: Routes = [
  { path: 'profile', component:  ProfileComponent},
  { path: 'crops/all', component:  ItemListComponent},
  { path: 'order/:id', component:  OrderComponent},
  { path: 'my/orders', component:  MyOrderListComponent},
  { path: 'my/subscriptions', component:  SubscribeListComponent},
  { path: 'subscribe/:id', component:  SubscribeComponent}
  
  // { path: 'my/profile', component:  ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManageComponent,
    ItemListComponent,
    ItemComponent,
    OrderComponent,
    MyOrderListComponent,
    MyOderItemComponent,
    SubscribeComponent,
    ProfileComponent,
    SubscribeListComponent,
    SubscribeItemComponent,
    AuthorityDirective,
    BiddingDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    PushNotificationsModule
  ],
  providers: [OrderService,CropService,NotifyService,SubscribeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
