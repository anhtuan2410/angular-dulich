import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TourService } from "./../../../services/tour.service";
import {Tour} from "./../../../models/Tour"
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private product :[];
  private name :string ;
  private noiden: string;
  private noikh: string;
  private thoigian: number;
  public flag :boolean =false;
  public tour: Tour[];
  constructor(private _tourService: TourService,private router: Router, private activatedRouteuter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouteuter.queryParams.subscribe(data=>{
      let str :string='' ;

       if(data){
         if(data.name){
           str = "title_like=" + data.name+'&';
         }
         if (data.noiden) {
           if (data.noiden !=0)
             str += "Manoiden=" + data.noiden + '&';
         }
         if (data.noikh) {
           if (data.noikh != 0)
             str += "Manoikhoihanh=" + data.noikh+'&';
         }
         if (data.thoigian) {
           if (data.thoigian != 0){
             str += "thoigiankhoikhanh_like=/" + data.thoigian ;
           }
         }

       }
       if(str){
         return this._tourService
           .searchTours(str)
           .subscribe(data => {
             this.flag =true;
             this.tour=data;
           });
       }
      return this.flag = false;
    })

  }

}
