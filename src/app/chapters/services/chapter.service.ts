import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Chapter} from "../model/chapter.entity";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class ChapterService extends BaseService<Chapter>{

  constructor(http: HttpClient, baseCookieService: CookieService) {
    super(http, baseCookieService);
    this.resourceEndpoint='/chapters';
  }
}
