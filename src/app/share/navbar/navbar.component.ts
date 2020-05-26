import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Account } from "./../../models/Account";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, OnChanges {
  public flaglogin: boolean = false;
  public total: number = 0;
  public user: Account;
  @Input('totalcart') totalcart:number =0
  @Input('totalcart2') totalcart2: number = 0
  @Input('totalcart3') totalcart3: number = 0
  constructor(private _loginService: LoginService ) {}

  ngOnInit() {
    this.total= 0;
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart && cart.length > 0) {
      this.total = cart.length;
    }

    this.flaglogin = this._loginService.checkLogin();
    if (this.flaglogin) {
      this._loginService.getUserLogin().subscribe(data => {
          this.user = data;
      });
    }


  }
  ngOnChanges() {
    if(this.totalcart>0){
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (cart && cart.length > 0) {
        this.total = cart.length;
      } else {
        return this.total = 1;
      }
      return this.total += 1;
    }
    if (this.totalcart2 > 0) {
      this.total =1;
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (cart && cart.length > 0) {
        this.total = cart.length;
      } else {
        return this.total ;
      }
      return this.total   ;
    }
    if (this.totalcart3 ) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (cart && cart.length > 0) {
        this.total = cart.length;
      } else {
        return this.total = 0;
      }

    }
  }
  logout() {
    this._loginService.logout();
  }
}
