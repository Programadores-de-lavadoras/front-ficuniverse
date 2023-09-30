import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationsComponent } from './public/pages/creations/creations.component';
import { WriteFanficComponent } from './public/pages/write-fanfic/write-fanfic.component';
import { AuthorsComponent } from './public/pages/authors/authors.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { FanficsComponent } from './ficuniverse/pages/fanfics/fanfics.component';

const routes: Routes = [
  {path: 'creations', component: CreationsComponent},
  {path: 'write-fanfic', component: WriteFanficComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'ficuniverse/fanfic', component: FanficsComponent},
  {path: '', redirectTo: 'creations', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
