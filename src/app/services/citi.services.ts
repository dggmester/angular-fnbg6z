import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { citi } from '../model/citi.model';

@Injectable({
  providedIn: 'root',
})
export class CitiService {
  constructor(private http: HttpClient) {}

  GetCitiList(): Observable<citi[]> {
    return this.http.get<citi[]>('assets/cities.json');
  }
}
