import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }
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
  }

}
