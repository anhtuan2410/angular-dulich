import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './../../../services/login.service';
import { Account } from "./../../../models/Account";
import { Router } from '@angular/router';
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  public txthoten: string;
  public txtusername: string;
  public txtemail: string;
  public txtpassword: string;
  public txtcfpassword: string;
  public txtsdt: string;
  public messPass: boolean = false;
  public flagexist: boolean = false;
  public flagregist: boolean = false;
  constructor(
    private _loginService: LoginService,
    private router: Router,
  ) {}

  ngOnInit() {

  }

  onSubmit(lgForm: NgForm) {
    if (lgForm.valid) {
      let data = {
        username: this.txtusername,
        password: this.txtpassword,
        hoten: this.txthoten,
        email: this.txtemail,
        sđt: this.txtsdt
      };
      this._loginService.register(data).subscribe(data => {
        if (data) this.flagregist = true;
        alert("Đăng ký thành công !");
        this.router.navigate(["/login"]);
      });
    }
    return;
  }
  onKey() {
    if (this.txtemail != null) {
      this._loginService.checkUserByEmail(this.txtemail).subscribe(data => {
        if (data.length > 0) {
          return (this.flagexist = true);
        }
        return (this.flagexist = false);
      });
    }
  }

  onKeyPass() {
    if (this.txtpassword != this.txtcfpassword) {
      return (this.messPass = true);
    } else {
      this.messPass = false;
    }
  }
}
