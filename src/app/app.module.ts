import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { ImageShowComponent2Component } from './image-show-component2/image-show-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    ImageShowComponent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
