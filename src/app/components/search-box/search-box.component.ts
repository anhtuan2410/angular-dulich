import { Component, OnInit } from '@angular/core';
import { NoidenService} from './../../services/noiden.service';
import { NoikhService } from './../../services/noikh.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  public ten: string ;
  public noiden:string ='0' ;
  public noikh: string ='0';
  public thoigian: string ='0';
  public arrNoiden: [];
  public arrNoiKH: [];

  constructor(private route: ActivatedRoute ,private router: Router, private _noidenService: NoidenService, private _noikhService: NoikhService) { }

  ngOnInit() {
    this._noidenService
      .getAllNoiDen()
      .subscribe(data => {
        this.arrNoiden=data;
      });

    this._noikhService
      .getAllNoiKH()
      .subscribe(data => {
        this.arrNoiKH = data;
      });
  }

  onSeach(){
    this.router.navigate(['/search'], { skipLocationChange: true ,relativeTo: this.route ,queryParams: { name: this.ten ? this.ten : '', noiden: this.noiden ? this.noiden:'',noikh:this.noikh?this.noikh:'',thoigian:this.thoigian?this.thoigian:'' } });
  }

}
