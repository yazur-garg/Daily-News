import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '../User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileJson : string = ''
  json : JSON 
  email : string | undefined  =""
  userName : string | undefined  =""
  data : any
  constructor(public auth : AuthService) {
 
    

    
   }
  staticUser: User = {
    id: 1,

    name: "",
    email: "",
    password: "abcd",
    phone: 32542661702,
    prefs: {
        locs: ["Milwaukee,US","London,GB","Paris,FR"],
        categs: ["Technology","Culture","Business","Style"]
    }
  };

  ngOnInit(): void {
    
    this.auth.user$.subscribe(
      (profile)=>
      {

this.userName = JSON.stringify(profile?.name)
this.email = JSON.stringify(profile?.email)

  this.staticUser.name = this.userName.split(`"`).join("")
  this.staticUser.email = this.email

  this.staticUser.email = JSON.stringify(profile?.email)    
      }
      )
   
      
    }
  

  }


