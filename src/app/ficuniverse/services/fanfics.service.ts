import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { Fanfic } from '../model/fanfic.entity';
import { HttpClient } from '@angular/common/http';
import {Observable, map} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class FanficsService extends BaseService<Fanfic>{

  constructor(http: HttpClient, baseCookieService: CookieService) {
    super(http, baseCookieService);
    this.resourceEndpoint = '/fanfics'
   }

}

