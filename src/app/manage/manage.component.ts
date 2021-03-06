import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onShop(){
    this.router.navigate(['crops','all']);
  }

  onProfile(){
    this.router.navigate(['profile']);
  }
  onMyOrders(){
    this.router.navigate(['my','orders']);
    
  }
  onMySubscriptions(){
    this.router.navigate(['my','subscriptions']);
  }

}
