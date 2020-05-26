import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class NoidenService {
  public URL: string = "http://localhost:3000/TypeNoiDen";
  constructor(private http: HttpClient) { }

  getAllNoiDen(): Observable<[]> {
    return this.http.get<[]>(this.URL);
  }
}
