import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Account } from "./../models/Account";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class LoginService {
  public URL: string = "http://localhost:3000/Account";

  constructor(private http: HttpClient, private router: Router) {}

  getLogin(email: string, password: string): Observable<[]> {
    if (email == "" || password == "") {
      return null;
    }
    return this.http.get<[]>(this.URL + `?email=${email}&password=${password}`);
  }
  saveUserLogin(data: string) {
    if (data != "") {
      localStorage.setItem("login", data);
    }
  }
  getUserLogin(): Observable<Account> {
    let email = localStorage.getItem("login");
    if (email != "") {
      return this.http.get<Account>(this.URL + `?email=${email}`);
    }
    return null;
  }
  checkUserByEmail(email: string) {
    if (email != "") {
      return this.http.get<[]>(this.URL + `?email=${email}`);
    }
  }
  checkLogin() {
    let login = localStorage.getItem("login");
    if (login != null) return true;
    return false;
  }

  logout() {
    localStorage.removeItem("login");

    this.router.navigate(["/login"]);
  }

  register(data: any) {
    return this.http.post(this.URL, data);
  }
}
