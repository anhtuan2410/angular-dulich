import { Component, OnInit } from '@angular/core';
import { BlogService } from "./../../services/blog.service";
import { Blog } from "./../../models/Blog";
@Component({
  selector: "app-tintuc-noi-bat",
  templateUrl: "./tintuc-noi-bat.component.html",
  styleUrls: ["./tintuc-noi-bat.component.scss"]
})
export class TintucNoiBatComponent implements OnInit {
  public blogs: Blog;
  private s: number;
  private e: number;
  constructor(private _blogService: BlogService) {}

  ngOnInit() {
    this.s = 0;
    this.e = 3;
    this._blogService
      .getAllBlog(this.s, this.e)
      .subscribe(data => (this.blogs = data));
  }
}
