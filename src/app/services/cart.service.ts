import { Injectable } from '@angular/core';
import {Item} from './../models/Item';
import { Product } from "./../models/Product";
import {TourService} from './tour.service';


@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private _tourService: TourService) {}

   addToCart(id: number ,qty :number) {
    let item: Item;
    let tour: Product;
    let inde:number =0;
    if (id) {
      this._tourService.getTour(id).subscribe(data => {
        tour = {
          id: data.id,
          title: data.title,
          giatien: data.giatien,
          image: data.image[inde]
        };
        item = {
          product: tour,
          quantity: qty
        };
        if (localStorage.getItem("cart") == null) {
          let cart: any = [];
          cart.push(JSON.stringify(item));
          localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          let cart: any = JSON.parse(localStorage.getItem("cart"));

          let index: number = -1;
          var total: number = cart.length;
          for (var i = 0; i < cart.length; i++) {
            let item: Item = JSON.parse(cart[i]);
            if (item.product.id == id) {
              index = i;
              break;
            }
          }
          if (index == -1) {
            cart.push(JSON.stringify(item));
            localStorage.setItem("cart", JSON.stringify(cart));
          } else {
            let item: Item = JSON.parse(cart[index]);
            item.quantity += qty;
            cart[index] = JSON.stringify(item);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }

        return total;
      });
    }

  }

}
