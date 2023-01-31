import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DatabaseService } from '../database.service';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private databaseService: DatabaseService,
    private router: Router
  ) {}
  user_: User = {
    id: '',
    name: '',
    email: '',
    img: '',
    prefs: {
      locs: [],
      categs: [],
    },
  };

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      if (profile?.sub != null) {
        this.user_.id = profile?.sub;
        this.user_.name = profile?.name;
        this.user_.img = profile?.picture;
        this.user_.email = profile?.email;
        this.databaseService.getUser(this.user_.id).subscribe((data) => {
          if (data == null) {
            this.databaseService.newUser(this.user_).subscribe((err) => {
              console.log(err);
            });
          } else {
            this.user_.prefs = data.prefs;
          }
        });
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
