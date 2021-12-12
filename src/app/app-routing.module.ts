import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accAuth/login/login.component';
import { RegComponent } from './accAuth/reg/reg.component';
import { FAQComponent } from './helpUs/faq/faq.component';
import { AboutUsComponent } from './mainmenu/about-us/about-us.component';
import { ContactUsComponent } from './mainmenu/contact-us/contact-us.component';
import { HomeComponent } from './mainmenu/home/home.component';
import { ProductPageComponent } from './mainmenu/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'products', component: ProductPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
