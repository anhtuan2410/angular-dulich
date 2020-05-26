import { Component, OnInit} from "@angular/core";
import {CartService} from './../../../services/cart.service'
import {Item} from './../../../models/Item';
import { Product } from "./../../../models/Product";
import { TourService } from './../../../services/tour.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  constructor(private _tourService: TourService, private router: Router) {}
  private items: Item[] = [];
  private total: number = 0;
  private total1: number = 0;
  private total2: number = 0;
  public all: number = 0;
  public qty :number =0;
  public flagCart :boolean =false;
  ngOnInit() {
    this.loadCart();
  }
  onKey(id:number,event:any){
    let qt :number ;
    qt =event.target.value;
    if(qt<=0){
      alert("Vui long nhập lại số lượng lớn hơn 0");
      return ;
    }
    this.addToCart(id,qt,1);
  }
  addToCart(id: number, qty: number ,mode:number) {
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
            if(mode == 0){
              item.quantity += qty;
            }
            else item.quantity = qty;

            cart[index] = JSON.stringify(item);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }

        this.loadCart();
      });
    } else {
      this.loadCart();
    }
  }
  loadCart() {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem("cart"));

    if(cart){
      if (cart.length == 0) {
        return this.removeAll();
      }
      if (cart.length > 0) {
        this.flagCart=true;
        for (var i = 0; i < cart.length; i++) {
          let item = JSON.parse(cart[i]);
          this.items.push({
            product: item.product,
            quantity: item.quantity
          });
          this.total += item.product.giatien * item.quantity;
        }
      }

    }



  }
  remove(id: number): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.total1 += 1;
    this.loadCart();
  }
  removeAll(){
    localStorage.removeItem("cart");
    this.flagCart =false;
    this.total1 +=1;

  }

  checkout(){
    alert("Thanh toán thành công !");
    this.router.navigate(["/Home"]);
  }


}
