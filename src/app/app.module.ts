import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './accAuth/login/login.component';
import { RegComponent } from './accAuth/reg/reg.component';
import { ContactUsComponent } from './mainmenu/contact-us/contact-us.component';
import { FAQComponent } from './helpUs/faq/faq.component';
import { AboutUsComponent } from './mainmenu/about-us/about-us.component';
import { HomeComponent } from './mainmenu/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    ContactUsComponent,
    FAQComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
