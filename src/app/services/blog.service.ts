import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Blog } from "./../models/Blog";
import { Observable } from "rxjs";
import { of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
@Injectable({
  providedIn: "root"
})
export class BlogService {
  public blogURL: string = "http://localhost:3000/Blog/";
  constructor(private http: HttpClient) {}

  
  getAllBlog(s: number, e: number): Observable<Blog> {
    if (s >= 0 && e >= 0) {
      return this.http.get<Blog>(this.blogURL + `?_start=${s}&_end=${e}`);
    }
    return this.http.get<Blog>(this.blogURL);
  }

  findBlogById(id: number): Observable<Blog> {
    const selectUrl = `${this.blogURL}${id}`;
    return this.http.get<Blog>(selectUrl).pipe(
      // tap(selectedBlog => console.log(`selectedBlog = ${JSON.stringify(selectedBlog)}`))
    );
  }
}
