import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class NoikhService {
  public URL: string = "http://localhost:3000/TypeNoiKhoiHanh";
  constructor(private http: HttpClient) { }
  getAllNoiKH(): Observable<[]> {
    return this.http.get<[]>(this.URL);
  }
}
