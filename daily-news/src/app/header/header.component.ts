import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profileJson: string = "";
 darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  constructor(public auth: AuthService,private darkModeService: DarkModeService) { }

  ngOnInit(): void {
    this.darkMode$.subscribe((value) => {
      console.log('dark mode value:', value);
    });
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2)),
    );
  }
  onToggle(): void {
    console.log('toggle');
    this.darkModeService.toggle();
  }

  formSubmit() {
    console.log('form submitted');
  }
}
