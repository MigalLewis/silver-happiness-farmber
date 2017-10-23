import { Profile, Contact, CONTACT_TYPE, PersonOfContact, Location } from './profile.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile :Profile;

  constructor() { }

  ngOnInit() {
    this.profile=new Profile("Farmers brothers","","https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Farmer_Brothers_Company_Logo.png/200px-Farmer_Brothers_Company_Logo.png",
    "We a farmers brothers are farmers and brothers","we have alot",4,[
      new Location("Head office","456 wayne manor, Gotham ,2468",true),
      new Location("Farm","456 wayne penthouse, Gotham ,2468",false)
    ],[
      new PersonOfContact("Bruce Wayne","Bruce wayne is the owner",[new Contact("main phone",CONTACT_TYPE.PHONE,"735-185-7301"),
      new Contact("Bruce wayne is the owner",CONTACT_TYPE.EMAIL,"brucewayne@gmail.com"),
      new Contact("Bruce wayne is the owner",CONTACT_TYPE.WHATSAPP,"735-185-7301")
    ]),
      new PersonOfContact("Bruce Wayne","Bruce wayne is the owner",[new Contact("main phone",CONTACT_TYPE.PHONE,"735-185-7301"),
      new Contact("Bruce wayne is the owner",CONTACT_TYPE.EMAIL,"brucewayne@gmail.com")]),
      new PersonOfContact("Farmers brothers General","The company general",[new Contact("Our website",CONTACT_TYPE.WEBSITE,"www.farmersBrothers.com"),
      new Contact("Twitter handler",CONTACT_TYPE.TWITTER,"#FarmerBrothers"),
      new Contact("Facebook page",CONTACT_TYPE.FACEBOOK,"www.facebook.com/farmersBrothers"),
      new Contact("Linkden page",CONTACT_TYPE.LINKDEN,"www.linkden.com/farmersBrothers")
    ])
    ]);
  }

}
