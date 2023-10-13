import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChaptersComponent} from "./chapters/pages/chapters/chapters.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {SearchComponent} from "./public/pages/search/search.component";
import { CreationsComponent } from './public/pages/creations/creations.component';
import { WriteFanficComponent } from './public/pages/write-fanfic/write-fanfic.component';
import { AuthorsComponent } from './public/pages/authors/authors.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { FanficsComponent } from './ficuniverse/pages/fanfics/fanfics.component';
import {UsersComponent} from "./users/pages/users/users.component";
import {CommentsComponent} from "./comments/pages/comments/comments.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'search', component: SearchComponent},
  {path: 'creations', component: CreationsComponent},
  {path: 'write-fanfic', component: WriteFanficComponent},
  {path: 'chapters-crud', component: ChaptersComponent},
  {path: 'fanfic-crud', component: FanficsComponent},
  {path: 'users-crud', component: UsersComponent},
  {path: 'comments-crud', component: CommentsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
