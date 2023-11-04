import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { CreationsComponent } from './ficuniverse/pages/creations/creations.component';
import { WriteFanficComponent } from './ficuniverse/pages/write-fanfic/write-fanfic.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatBottomSheet, MatBottomSheetModule} from "@angular/material/bottom-sheet";

import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDividerModule} from '@angular/material/divider';
import { AvatarMenuComponent } from './shared/components/avatar-menu/avatar-menu.component';
import { NotificationMenuComponent } from './shared/components/notification-menu/notification-menu.component';
import { ChapterFormComponent } from './chapters/components/chapter-form/chapter-form.component';
import { ChaptersComponent } from './chapters/pages/chapters/chapters.component';
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { FooterContentComponent } from './shared/components/footer-content/footer-content.component';
import { HomeComponent } from './public/pages/home/home.component';
import { AuthorsComponent } from './public/pages/authors/authors.component';
import { SearchComponent } from './ficuniverse/pages/search/search.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { FanficsComponent } from './ficuniverse/pages/fanfics/fanfics.component';
import { FanficFormComponent } from './ficuniverse/components/fanfic-form/fanfic-form.component';
import { FanficsService } from './ficuniverse/services/fanfics.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import { CommentsFormComponent } from './comments/components/comments-form/comments-form.component';
import { CommentsComponent } from './comments/pages/comments/comments.component';
import { UsersFormComponent } from './users/components/users-form/users-form.component';
import { UsersComponent } from './users/pages/users/users.component';
import {MatMenuModule} from "@angular/material/menu";
import { FicSearchCardComponent } from './ficuniverse/components/fic-search-card/fic-search-card.component';
import { CategorySheetComponent } from './ficuniverse/components/category-sheet/category-sheet.component';
import { TagSheetComponent } from './ficuniverse/components/tag-sheet/tag-sheet.component';
import {MatListModule} from "@angular/material/list";
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";
import {MatChipsModule} from "@angular/material/chips";
import {SharedDataService} from "./shared/services/shared-data.service";


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
    AuthorsComponent,
    SearchComponent,
    CreationsComponent,
    WriteFanficComponent,
    AuthorsComponent,
    PageNotFoundComponent,
    FanficsComponent,
    FanficFormComponent,
    EmpAddEditComponent,
    CommentsFormComponent,
    CommentsComponent,
    UsersFormComponent,
    UsersComponent,
    FicSearchCardComponent,
    CategorySheetComponent,
    TagSheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
    ReactiveFormsModule,
    MatDialogModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatBottomSheetModule,
    MatListModule,
    MatLegacyChipsModule,
    MatChipsModule,
  ],
  providers: [FanficsService,SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }