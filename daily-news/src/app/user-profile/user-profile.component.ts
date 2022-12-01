import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '../User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileJson : string = "";
  constructor(public auth : AuthService) { }
  staticUser: User = {
    id: 1,
    name: "Bobby",
    email: "bob1@outlook.com",
    password: "abcd",
    phone: 32542661702,
    prefs: {
        locs: ["Milwaukee,US","London,GB","Paris,FR"],
        categs: ["Technology","Culture","Business","Style"]
    }
  };

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile)=>(this.profileJson = JSON.stringify(profile,null,2)) 
    )
  }

}
