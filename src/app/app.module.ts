import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomersComponent } from './customers/customers.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AddcustomerComponent,
    CustomersComponent,
    AboutusComponent,
    ContactusComponent,
    ServicesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'signup', component: SignupComponent},
      { path: 'customers', component: CustomersComponent},
      { path: 'addcustomer', component: AddcustomerComponent},
      { path: 'aboutus', component: AboutusComponent},
      { path: 'contactus', component: ContactusComponent},
      { path: 'services', component: ServicesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
