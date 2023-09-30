import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChaptersComponent} from "./chapters/pages/chapters/chapters.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {WriteComponent} from "./public/pages/write/write.component";
import {AuthorsComponent} from "./public/pages/authors/authors.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {SearchComponent} from "./public/pages/search/search.component";

const routes: Routes = [
  {path: 'chapters', component: ChaptersComponent},
  {path: 'home', component: HomeComponent},
  {path: 'writing', component: WriteComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
