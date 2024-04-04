import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { CoursesComponent } from '../app2/courses/courses.component';
import { SubHeadreComponent } from '../app2/sub-headre/sub-headre.component';
import { SubSearchComponent } from '../app2/sub-search/sub-search.component';
import { FilterComponent } from '../app2/filter/filter.component';
import { DemoComponent } from '../app3/demo/demo.component';
import { CustomerListComponent } from '../app3/customer-list/customer-list.component';
import { ChildAppComponent } from '../app4/child-app/child-app.component';
import { ChildDemoComponent } from '../app4/child-demo/child-demo.component';
import { Comp1Component } from '../app5/comp1/comp1.component';
import { Comp2Component } from '../app5/comp2/comp2.component';
import { App5Component } from '../app5/app5/app5.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    CoursesComponent,
    SubHeadreComponent,
    SubSearchComponent,
    FilterComponent,
    DemoComponent,
    CustomerListComponent,
    ChildAppComponent,
    ChildDemoComponent,
    Comp1Component,
    Comp2Component,
    App5Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
