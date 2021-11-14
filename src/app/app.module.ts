import { FirebaseConfiguration } from './constants/config/firebase-configuration';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { getStorage, provideStorage } from "@angular/fire/storage";

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

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
    AppRoutingModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: FirebaseConfiguration.apiKey,
      authDomain: FirebaseConfiguration.authDomain,
      projectId: FirebaseConfiguration.projectId,
      storageBucket: FirebaseConfiguration.storageBucket,
      messagingSenderId: FirebaseConfiguration.messagingSenderId,
      appId: FirebaseConfiguration.appId,
      measurementId: FirebaseConfiguration.measurementId
    })),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
