import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { InsuranceComponent } from './components/containers/insurance/insurance.component';
import { ClaimsComponent } from './components/containers/claims/claims.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { OpinionComponent } from './components/containers/opinion/opinion.component';
import { GuaranteeComponent } from './components/containers/guarantee/guarantee.component';
import { PricingComponent } from './components/containers/pricing/pricing.component';
import { InformationComponent } from './components/containers/information/information.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    InsuranceComponent,
    ClaimsComponent,
    HeaderComponent,
    OpinionComponent,
    GuaranteeComponent,
    PricingComponent,
    InformationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
