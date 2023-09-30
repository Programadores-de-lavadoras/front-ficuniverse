import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { AvatarMenuComponent } from './shared/components/avatar-menu/avatar-menu.component';
import { NotificationMenuComponent } from './shared/components/notification-menu/notification-menu.component';
import {MatIconModule} from "@angular/material/icon";
import { ChapterFormComponent } from './chapters/components/chapter-form/chapter-form.component';
import { ChaptersComponent } from './chapters/pages/chapters/chapters.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { FooterContentComponent } from './chapters/components/footer-content/footer-content.component';
import { HomeComponent } from './public/pages/home/home.component';
import { WriteComponent } from './public/pages/write/write.component';
import { AuthorsComponent } from './public/pages/authors/authors.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { SearchComponent } from './public/pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AvatarMenuComponent,
    NotificationMenuComponent,
    ChapterFormComponent,
    ChaptersComponent,
    FooterContentComponent,
    HomeComponent,
    WriteComponent,
    AuthorsComponent,
    PageNotFoundComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
