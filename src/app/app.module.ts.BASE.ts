import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { FooterComponent } from './share/footer/footer.component';
import { SliderComponent } from './share/slider/slider.component';
import { HomeComponent } from "./components/layout/home/home.component";
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from "./components/layout/not-found/not-found.component";
import { TintucComponent } from "./components/layout/tintuc/tintuc.component";
import { LienheComponent } from "./components/layout/lienhe/lienhe.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    NotFoundComponent,
    TintucComponent,
    LienheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
