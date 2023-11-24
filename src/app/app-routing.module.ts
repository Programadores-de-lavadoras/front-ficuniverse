import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChaptersComponent} from "./chapters/pages/chapters/chapters.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {SearchComponent} from "./ficuniverse/pages/search/search.component";
import { CreationsComponent } from './ficuniverse/pages/creations/creations.component';
import { WriteFanficComponent } from './ficuniverse/pages/write-fanfic/write-fanfic.component';
import { AuthorsComponent } from './public/pages/authors/authors.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { FanficsComponent } from './ficuniverse/pages/fanfics/fanfics.component';
import {UsersComponent} from "./users/pages/users/users.component";
import {CommentsComponent} from "./comments/pages/comments/comments.component";
import {LoginComponent} from "./authentication/pages/login/login.component";
import {VerifyLoginService} from "./shared/services/verify-login.service";
import {RegisterComponent} from "./authentication/pages/register/register.component";
import { ReadingComponent } from './ficuniverse/pages/reading/reading.component';
import { DetailsComponent } from './ficuniverse/pages/details/details.component';
import {ProfileComponent} from "./users/components/profile/profile.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent, },
  {path: 'authors', component: AuthorsComponent, canActivate:[VerifyLoginService]},
  {path: 'search', component: SearchComponent, canActivate:[VerifyLoginService]},
  {path: 'creations', component: CreationsComponent, canActivate:[VerifyLoginService]},
  {path: 'write-fanfic', component: WriteFanficComponent, canActivate:[VerifyLoginService]},
  {path: 'chapters-crud', component: ChaptersComponent, canActivate:[VerifyLoginService]},
  {path: 'fanfic-crud', component: FanficsComponent, canActivate:[VerifyLoginService]},
  {path: 'users-crud', component: UsersComponent, canActivate:[VerifyLoginService]},
  {path: 'comments-crud', component: CommentsComponent, canActivate:[VerifyLoginService]},
  {path: 'myprofile', component: ProfileComponent, canActivate:[VerifyLoginService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'details/:fanficId', component: DetailsComponent, canActivate:[VerifyLoginService]},
  {path: 'reading', component: ReadingComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
