import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailfanficService {
    private apiUrl = 'http://localhost:3000/fanfics'; 
  
    constructor(private http: HttpClient) {}
  
  
    getFanficById(fanficId: number): Observable<any> {
      const url = `${this.apiUrl}/${fanficId}`;
      return this.http.get(url).pipe(
        catchError((error) => {
          console.error('Error fetching fanfic details:', error);
          throw error;  
        })
      );
    }
  

}
