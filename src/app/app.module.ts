import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import emailjs from '@emailjs/browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DestinationComponent } from './destination/destination.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PackagesComponent } from '../packages/packages.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import {MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { CountryCarouselComponent } from './country-carousel/country-carousel.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { OfferingsComponent } from './offerings/offerings.component';
import { CardComponent } from './offerings/card/card.component';
import { RegionsComponent } from './regions/regions.component';
import { AsiaComponent } from './regions/asia/asia.component';
import { AmericasComponent } from './regions/americas/americas.component';
import { EuropeComponent } from './regions/europe/europe.component';
import { MiddleEastComponent } from './regions/middle-east/middle-east.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdventuresComponent } from './adventures/adventures.component';
import { TimelineComponent } from './package-detail/timeline/timeline.component';
import { ConfirmBookingModalComponent } from './confirm-booking-modal/confirm-booking-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollEffectComponent } from './scroll-effect/scroll-effect.component';
// import { ParallaxEffectComponent } from './parallax-effect/parallax-effect.component';
import {MatSliderModule} from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TypeWriterComponent } from './type-writer/type-writer.component';
import { LocationsTextComponent } from './locations-text/locations-text.component';
import { TravelersInfoComponent } from './travelers-info/travelers-info.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import {AngularFireModule} from '@angular/fire/compat';



import { firebaseConfig } from '../firebase-config';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { MybookingsComponent } from './mybookings/mybookings.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { ExploreWeatherComponent } from './explore-weather/explore-weather.component';
import { CdialogComponent } from './cdialog/cdialog.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DestinationComponent,
    AboutUsComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
    PackagesComponent,
    FooterComponent,
    SearchComponent,
    CountryCarouselComponent,
    OfferingsComponent,
    CardComponent,
    RegionsComponent,
    AsiaComponent,
    AmericasComponent,
    EuropeComponent,
    MiddleEastComponent,
    PackageDetailComponent,
    AdventuresComponent,
    TimelineComponent,
    ConfirmBookingModalComponent,
    ScrollEffectComponent,
    TestimonialsComponent,
    TypeWriterComponent,
    LocationsTextComponent,
    TravelersInfoComponent,
    LoginComponent,
    ProfileComponent,
    MybookingsComponent,
    WeatherComponent,
    ExploreWeatherComponent,
    CdialogComponent,

    // ParallaxEffectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MatSliderModule,
    
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatStepperModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    
   
    AngularFireModule.initializeApp(firebaseConfig.firebase,'tourism'),
    
   
  ],

  providers: [],

  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
  
}



