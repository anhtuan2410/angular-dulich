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
import { TourNoiBatComponent } from './components/tour-noi-bat/tour-noi-bat.component';
import {HttpClientModule} from '@angular/common/http';
import {TourService} from './services/tour.service';
import { FormatPipe } from './pipe/format.pipe';


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
    TourNoiBatComponent,
    FormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
