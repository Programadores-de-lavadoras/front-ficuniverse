import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreationsComponent } from './public/pages/creations/creations.component';
import { WriteFanficComponent } from './public/pages/write-fanfic/write-fanfic.component';
import { AuthorsComponent } from './public/pages/authors/authors.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { FanficsComponent } from './ficuniverse/pages/fanfics/fanfics.component';
import { FanficFormComponent } from './ficuniverse/components/fanfic-form/fanfic-form.component';
import { FanficsService } from './ficuniverse/services/fanfics.service';


@NgModule({
  declarations: [
    AppComponent,
    CreationsComponent,
    WriteFanficComponent,
    AuthorsComponent,
    PageNotFoundComponent,
    FanficsComponent,
    FanficFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [FanficsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
