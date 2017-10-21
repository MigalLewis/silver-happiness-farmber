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

const appRoutes: Routes = [
  { path: 'crops/all', component:  ItemListComponent},
  { path: 'order/:id', component:  OrderComponent},
  { path: 'my/orders', component:  MyOrderListComponent},
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
    SubscribeComponent
    

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [OrderService,CropService],
  bootstrap: [AppComponent]
})
export class AppModule { }
