import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Fanfic } from '../model/fanfic.entity';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FanficsService extends HttpService<Fanfic>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/fanfics'
   }
}
