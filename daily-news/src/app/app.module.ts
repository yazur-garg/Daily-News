import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { PagingComponent } from './paging/paging.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { SearchComponent } from './search/search.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchNewsCardComponent } from './search-news-card/search-news-card.component';
import { LogoutComponent } from './logout/logout.component';

import { DarkModeService } from 'angular-dark-mode';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    NewsCardComponent,
    PagingComponent,
    UserProfileComponent,
    UserInfoComponent,
    UserSidebarComponent,
    SearchComponent,
    SearchbarComponent,
    SearchNewsCardComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-qlaqth2maxgklzeb.us.auth0.com',
      clientId: 'LA10lce6tjmCYhAOgl5efiIPnmKOe4GZ',
    }),
  ],
  providers: [DarkModeService],
  bootstrap: [AppComponent],
})
export class AppModule {}