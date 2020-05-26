import { Component, OnInit } from '@angular/core';
import { Account } from "./../../../models/Account";
import { NgForm } from '@angular/forms';
import {LoginService} from './../../../services/login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: Account ;
  public txtemail: string;
  public txtpassword: string;
  public flag :boolean =true;

  constructor(private router: Router, private _loginService: LoginService) { }

  ngOnInit() {


  }
  onSubmit(lgForm :NgForm){
    if (lgForm.valid){
      this._loginService.getLogin(this.txtemail, this.txtpassword).subscribe(data => {
        if (data.length==0){
           return  this.flag=false
        }
        this.flag = true;
        this._loginService.saveUserLogin(this.txtemail);
        this.router.navigate(['/Home']);

      }
        );

    }
    return;
  }

}
