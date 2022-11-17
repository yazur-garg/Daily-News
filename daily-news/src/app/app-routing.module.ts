import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'home' , component: HomeComponent },
  { path:'login' , component: LoginComponent },
  { path:'users/1', component: UserProfileComponent },
  //{ path:'users/:id', component: UserProfileComponent },
  { path:'' , redirectTo: '/home', pathMatch: 'full' },
  { path:'**' , component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
