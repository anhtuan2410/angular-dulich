import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { TourService } from "./../../../services/tour.service";
import { BlogService } from "./../../../services/blog.service";
import { Tour } from "./../../../models/Tour";
import { Router ,ActivatedRoute } from "@angular/router";
import { Blog } from "./../../../models/Blog";
import { CartService } from './../../../services/cart.service';
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailComponent implements OnInit {
  public Quantity: number = 1;
  public produtcs: Tour;
  public pro: Tour;
  private s: number;
  private e: number;
  private id: number;
  public blogs: Blog;
  public total :number =0;
  constructor(
    private _tourService: TourService,
    private _blogService: BlogService,
    private _cartService: CartService,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.s = 0;
    this.e = 6;
    this.id = +this.route.snapshot.paramMap.get("id");
    this._tourService
      .getAllTour(this.s, this.e)
      .subscribe(data => (this.produtcs = data));
    this._tourService.getTour(this.id).subscribe(data => (this.pro = data));

    this._blogService
      .getAllBlog(this.s, this.e)
      .subscribe(data => (this.blogs = data));
  }

  minus() {
    if (this.Quantity <= 0) {
      this.Quantity = 1;
    } else this.Quantity--;
  }
  plus() {
    this.Quantity++;
  }
   addToCarrt(id :number){
    this._cartService.addToCart(id, this.Quantity);
     return this.total+=1;
  }
}
