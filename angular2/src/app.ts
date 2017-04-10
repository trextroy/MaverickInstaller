//our root app component
import { Component, NgModule, VERSION } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module';

import { LoginService } from './login.service'
import { AppComponent } from './app.component'
import { LoginComponent } from './login.component'
import { SuccessComponent } from './success.component'
 
 
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    LoginComponent,
    SuccessComponent
  ],
  providers: [LoginService],
  bootstrap: [ 
    AppComponent
  ]
})

export class AppModule { }