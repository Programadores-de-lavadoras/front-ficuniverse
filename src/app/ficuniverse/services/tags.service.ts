import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Tag} from "../model/tag.entity";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class TagsService extends BaseService<Tag>{

  constructor(http: HttpClient, baseCookieService: CookieService) {
    super(http, baseCookieService);
    this.resourceEndpoint = '/tags';
  }
}
