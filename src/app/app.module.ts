import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Modulo1Module } from './modulo1/modulo1.module';
import { Modulo2Module } from './modulo2/modulo2.module';
import { Modulo3Module } from './modulo3/modulo3.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Modulo1Module,
    Modulo2Module,
    Modulo3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
