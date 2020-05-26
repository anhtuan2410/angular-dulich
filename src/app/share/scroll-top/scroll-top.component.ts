import { Component,  HostListener, ElementRef  } from '@angular/core';

@Component({
  selector: "app-scroll-top",
  templateUrl: "./scroll-top.component.html",
  styleUrls: ["./scroll-top.component.css"]
})
export class ScrollTopComponent {
  isShow: boolean;
  topPosToStartShowing = 400;
  @HostListener("window:scroll")
  checkScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  ScrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
}
