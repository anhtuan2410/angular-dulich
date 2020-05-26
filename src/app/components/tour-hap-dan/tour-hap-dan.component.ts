import { Component, OnInit } from '@angular/core';
import { TourService } from "./../../services/tour.service";
import { Tour } from "./../../models/Tour";
@Component({
  selector: "app-tour-hap-dan",
  templateUrl: "./tour-hap-dan.component.html",
  styleUrls: ["./tour-hap-dan.component.scss"]
})
export class TourHapDanComponent implements OnInit {
  public produtcs: Tour;
  private s: number;
  private e: number;
  constructor(private _tourService: TourService) {}

  ngOnInit() {
    this.s = 0;
    this.e = 6;
    this._tourService
      .getAllTour(this.s, this.e)
      .subscribe(data => (this.produtcs = data));
  }
}
