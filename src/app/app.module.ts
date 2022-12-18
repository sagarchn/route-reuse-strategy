import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouterReuseStrategy } from './route-reuse.stretegy';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddDetailsComponent,
    TermsConditionsComponent,
    HomeComponent
  ],
  imports: [CommonModule,
    BrowserModule, AppRoutingModule, FormsModule
  ],
  providers: [{provide : RouteReuseStrategy, useClass: CustomRouterReuseStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
