import { AddPropertyComponent } from "./property/add-property/add-property.component";
import { propertyCardComponent } from "./property/property-card/property-card.component";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from "./services/housing.service";

const appRoutes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    propertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [HousingService],
  bootstrap: [AppComponent],

})
export class AppModule { }
