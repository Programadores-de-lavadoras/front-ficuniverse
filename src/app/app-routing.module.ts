import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChaptersComponent} from "./chapters/pages/chapters/chapters.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {WriteComponent} from "./public/pages/write/write.component";
import {SearchComponent} from "./public/pages/search/search.component";
import { CreationsComponent } from './public/pages/creations/creations.component';
import { WriteFanficComponent } from './public/pages/write-fanfic/write-fanfic.component';
import { AuthorsComponent } from './public/pages/authors/authors.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { FanficsComponent } from './ficuniverse/pages/fanfics/fanfics.component';

const routes: Routes = [
  {path: 'chapters', component: ChaptersComponent},
  {path: 'home', component: HomeComponent},
  {path: 'writing', component: WriteComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
  //fixing
  {path: 'creations', component: CreationsComponent},
  {path: 'write-fanfic', component: WriteFanficComponent},
  {path: 'ficuniverse/fanfic', component: FanficsComponent},
  {path: '', redirectTo: 'creations', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
