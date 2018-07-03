import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router/';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BuilderComponent } from './builder/builder.component';
import { ProductSelectComponent } from './product-select/product-select.component';
import { BuildsComponent } from './builds/builds.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FilterComponent } from './product-select/filter/filter.component';
import { PartsComponent } from './product-select/parts/parts.component';
import { DropdownDirective } from './shared/dropdown.directive';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: BuilderComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'builds', component: BuildsComponent },
  { path: 'product/:name/:id', component: ProductDetailsComponent },
  { path: 'products/:name', component: ProductSelectComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BuilderComponent,
    ProductSelectComponent,
    BuildsComponent,
    ProductDetailsComponent,
    FilterComponent,
    PartsComponent,
    DropdownDirective
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
