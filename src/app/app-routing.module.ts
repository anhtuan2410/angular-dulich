import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//component
import { HomeComponent } from './components/layout/home/home.component';
import { NotFoundComponent } from "./components/layout/not-found/not-found.component";
import { TintucComponent } from "./components/layout/tintuc/tintuc.component";
import { LienheComponent } from "./components/layout/lienhe/lienhe.component";
import { ProductDetailComponent } from "./components/layout/product-detail/product-detail.component";
import { LoginComponent } from "./components/layout/login/login.component";
import { RegisterComponent } from "./components/layout/register/register.component";
import {AuthGuard} from './services/auth.guard'
import { BlogComponent } from "./components/layout/blog/blog-detail/blog-detail.component";
import { BlogListComponent } from "./components/layout/blog/blog-list/blog-list/blog-list.component";
import {CartComponent} from "./components/layout/cart/cart.component";
import { SearchComponent } from "./components/layout/search/search.component";
const appRoutes: Routes = [
  { path: "Home", redirectTo: "", pathMatch: "full" },
  { path: "", component: HomeComponent },
  { path: "gioi-thieu", component: TintucComponent },
  { path: "login", canActivate: [AuthGuard], component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "lien-he", component: LienheComponent },
  { path: "tour/:id", component: ProductDetailComponent },
  { path: "blog", component: BlogListComponent },
  { path: "blog/:id", component: BlogComponent },
  { path: "cart", component: CartComponent },
  { path: "search", component: SearchComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
