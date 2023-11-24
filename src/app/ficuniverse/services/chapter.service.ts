import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  getCategories() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000'; 
  constructor(private http: HttpClient) { }

  getChapters(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/chapters`);
  }
}
