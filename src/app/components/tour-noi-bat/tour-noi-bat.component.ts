import { Component, OnInit ,EventEmitter , Output } from '@angular/core';
import {TourService} from './../../services/tour.service';
import { Tour } from './../../models/Tour';
import {CartService} from './../../services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: "app-tour-noi-bat",
  templateUrl: "./tour-noi-bat.component.html",
  styleUrls: ["./tour-noi-bat.component.scss"]
})
export class TourNoiBatComponent implements OnInit {
  public produtcs: Tour;
  private s: number;
  private e: number;
  public total: number = 1;
  @Output('total') onHandTotal = new EventEmitter<number>()
  constructor(
    private _tourService: TourService,
    private _cartService: CartService,
    private router: Router

  ) {}

  ngOnInit() {
    this.s = 0;
    this.e = 9;

    this._tourService
      .getAllTour(this.s, this.e)
      .subscribe(data => (this.produtcs = data));
  }
   addToCart(id: number) {
    this._cartService.addToCart(id,1);
    return this.onHandTotal.emit(this.total +=1);
  }
}
