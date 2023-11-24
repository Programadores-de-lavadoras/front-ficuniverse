import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BaseService} from "../../shared/services/base.service";
import {Chapter} from "../../chapters/model/chapter.entity";

@Injectable({
  providedIn: 'root'
})
export class ChapterService extends BaseService<Chapter>{
  //private apiUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient, http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/chapters'
  }

  /*getChapters(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/chapters`);
  }*/
}
