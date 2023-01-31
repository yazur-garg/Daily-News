import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profileJson: string = "";

  constructor(public auth: AuthService, private newsService: NewsService) { }

  ngOnInit(): void {

    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2)),
    );
  }

  formSubmit(test : String) {
    console.log('form submitted');
    this.newsService.getNewsTopic(test);
  }
}
