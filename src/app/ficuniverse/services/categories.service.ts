import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {Fanfic} from "../model/fanfic.entity";
import {Category} from "../model/category.entity";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BaseService<Category>{

  constructor(http: HttpClient, baseCookieService: CookieService) {
    super(http, baseCookieService);
    this.resourceEndpoint = '/categories';
  }
}
