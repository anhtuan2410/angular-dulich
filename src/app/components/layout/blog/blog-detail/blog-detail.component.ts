import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { BlogService } from '../../../../services/blog.service';
import { Blog } from '../../../../models/Blog';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogComponent implements OnInit {
  blog : Blog;
  titleBlog: Blog;
  private s: number;
  private e: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.s = 0;
    this.e = 4;
    this.blogService
      .getAllBlog(this.s, this.e)
      .subscribe(data => (this.titleBlog = data));
    this.activatedRoute;
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.blogService.findBlogById(parseInt(id)))
    ).subscribe(blog => this.blog = blog);
  }

  // getBlogFromRoute(){
  //   const id = +this.activatedRoute.snapshot.paramMap.get('id');
  //   this.blogService.findBlogById(id).subscribe(blog => {
  //     console.log(blog);
  //     this.blog = blog
  //   });



}
