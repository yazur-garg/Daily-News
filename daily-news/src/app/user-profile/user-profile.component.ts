import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '../User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(public auth : AuthService) {}
  user_: User = {
    id: "",
    name: "",
    email: "",
    img: "",
    prefs: {
        locs: ["Milwaukee,US","London,GB","Paris,FR"],
        categs: ["Technology","Culture","Business","Style"]
    }
  };

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile)=> 
        {
          this.user_.id = profile?.sub;
          this.user_.name = profile?.name;
          this.user_.img = profile?.picture;
          this.user_.email = profile?.email;
        }
    ) 
  }
}


