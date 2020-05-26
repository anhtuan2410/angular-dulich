import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { FooterComponent } from './share/footer/footer.component';
import { SliderComponent } from './share/slider/slider.component';
import { HomeComponent } from './components/layout/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from "./components/layout/not-found/not-found.component";
import { TintucComponent } from "./components/layout/tintuc/tintuc.component";
import { LienheComponent } from "./components/layout/lienhe/lienhe.component";
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { TourNoiBatComponent } from './components/tour-noi-bat/tour-noi-bat.component';
import {HttpClientModule} from '@angular/common/http';
import {TourService} from './services/tour.service';
import { FormatTextPipe } from "./pipe/format.pipe";
import { FormatPipe } from './pipe/format.pipe';

import { TourHapDanComponent } from './components/tour-hap-dan/tour-hap-dan.component';
import { ScrollTopComponent } from './share/scroll-top/scroll-top.component';
import { TintucNoiBatComponent } from './components/tintuc-noi-bat/tintuc-noi-bat.component';
import { DoiTacComponent } from './components/doi-tac/doi-tac.component';
import { NhanXetComponent } from './components/nhan-xet/nhan-xet.component';
import { ProductDetailComponent } from "./components/layout/product-detail/product-detail.component";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { LoginComponent } from "./components/layout/login/login.component";
import { LoginService } from './services/login.service';
import { RegisterComponent } from "./components/layout/register/register.component";

import { AuthGuard} from './services/auth.guard';
import { BlogComponent } from "./components/layout/blog/blog-detail/blog-detail.component";
import { BlogListComponent } from "./components/layout/blog/blog-list/blog-list/blog-list.component";
import { CartComponent } from './components/layout/cart/cart.component';
import { SearchComponent } from './components/layout/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    NotFoundComponent,
    TintucComponent,
    LienheComponent,
    SearchBoxComponent,
    TourNoiBatComponent,
    FormatPipe,
    FormatTextPipe,
    TourHapDanComponent,
    ScrollTopComponent,
    TintucNoiBatComponent,
    DoiTacComponent,
    NhanXetComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent,
    BlogComponent,
    BlogListComponent,
    CartComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
  ],
  providers: [TourService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
