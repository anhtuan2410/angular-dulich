import { Component, OnInit } from '@angular/core';
import { Blog } from '../../../../../models/Blog';
import { BlogService } from '../../../../../services/blog.service';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogList: Blog;
  private s: number;
  private e: number;

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.s = 0;
    this.e = 3;
    this.blogService
      .getAllBlog(this.s, this.e)
      .subscribe(data => {
        this.blogList = data,
        console.log(data)
      });
  }

}
