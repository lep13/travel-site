import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DestinationComponent } from './destination/destination.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PackagesComponent } from './destination/packages/packages.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import {MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { CountryCarouselComponent } from './country-carousel/country-carousel.component';
import { FormsModule } from '@angular/forms';
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
// import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import emailjs from '@emailjs/browser';



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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
