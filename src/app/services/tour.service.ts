import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Tour} from './../models/Tour';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class TourService {
  public URL: string = "http://localhost:3000/Product/";
  public API: string = "http://localhost:3000/Product";
  constructor(private http: HttpClient) {}

  getAllTour(s: number, e: number): Observable<Tour> {
    if (s >= 0 && e >= 0) {
      return this.http.get<Tour>(this.URL + `?_start=${s}&_end=${e}`);
    }
    return this.http.get<Tour>(this.URL);
  }
  getTour(id: number): Observable<Tour> {

    return this.http.get<Tour>(this.URL+id);
  }
  getAllTours(s: number, e: number): Observable<[]> {
    if (s >= 0 && e >= 0) {
      return this.http.get<[]>(this.URL + `?_start=${s}&_end=${e}`);
    }
    return this.http.get<[]>(this.URL);
  }
  searchTours(str: string): Observable<[]> {
    if (str)
      return this.http.get<[]>(this.API + `?${str}`);
      
  }
}
