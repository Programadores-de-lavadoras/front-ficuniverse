import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { CreationsComponent } from './public/pages/creations/creations.component';
import { WriteFanficComponent } from './public/pages/write-fanfic/write-fanfic.component';

import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from '@angular/material/divider';
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
import { SearchComponent } from './public/pages/search/search.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { FanficsComponent } from './ficuniverse/pages/fanfics/fanfics.component';
import { FanficFormComponent } from './ficuniverse/components/fanfic-form/fanfic-form.component';
import { FanficsService } from './ficuniverse/services/fanfics.service';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";


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
    SearchComponent,
    CreationsComponent,
    WriteFanficComponent,
    AuthorsComponent,
    PageNotFoundComponent,
    FanficsComponent,
    FanficFormComponent,
    EmpAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [FanficsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
