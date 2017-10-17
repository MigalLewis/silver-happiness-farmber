import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ManageComponent } from './manage/manage.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item-list/item/item.component';

const appRoutes: Routes = [
  { path: 'crops/all', component:  ItemListComponent},
  // { path: 'profile', component:  ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManageComponent,
    ItemListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
