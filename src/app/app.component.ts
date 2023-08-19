import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { citi } from './model/citi.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cities: citi[]; // Változó a városok tárolásához
  writeCities() {
    console.log('betöltött városk ::: ');
    console.log(this.cities);
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<citi[]>('../assets/cities.json').subscribe((data) => {
      this.cities = data;
    });
  }
}
