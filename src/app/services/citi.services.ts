import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { citi } from '../model/citi.model';

@Injectable({
  providedIn: 'root',
})
export class CitiService {
  private selectedCitiSubject = new BehaviorSubject<any>(null);
  selectedCiti$ = this.selectedCitiSubject.asObservable();
  setCitiValue(value: citi) {
    this.selectedCitiSubject.next(value);
  }

  constructor(private http: HttpClient) {}

  GetCitiList(): Observable<citi[]> {
    return this.http.get<citi[]>('assets/cities.json');
  }
}
