import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PackagesComponent } from '../packages/packages.component';
import { AsiaComponent } from './regions/asia/asia.component';
import { AmericasComponent } from './regions/americas/americas.component';
import { EuropeComponent } from './regions/europe/europe.component';
import { MiddleEastComponent } from './regions/middle-east/middle-east.component';
import { RegionsComponent } from './regions/regions.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { AdventuresComponent } from './adventures/adventures.component';
import { TimelineComponent } from './package-detail/timeline/timeline.component';
import { ConfirmBookingModalComponent } from './confirm-booking-modal/confirm-booking-modal.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'destinations', component: DestinationComponent},
  { path: 'destinations/:regionId', component: DestinationComponent },
  { path: 'adventures', component: AdventuresComponent},
  { path: 'destination/asia', component: AsiaComponent },
  { path: 'destination/americas', component: AmericasComponent },
  { path: 'destination/europe', component: EuropeComponent },
  { path: 'destination/middle-east', component: MiddleEastComponent },
  { path: 'packages/:id', component: PackageDetailComponent },
   {path: "confirmation", component: ConfirmBookingModalComponent},
  // {path: 'destinations/:regionId/packages', component: PackagesComponent},
  // {
  //   path: 'destination',
  //   component: RegionsComponent, // Parent component for destinations
  //   children: [
  //     { path: 'asia', component: AsiaComponent }, // Child route for Asia
  //     { path: 'europe', component: EuropeComponent }, // Child route for Europe
  //     { path: 'middle-east', component: MiddleEastComponent }, // Child route for Mid-East
  //     { path: 'americas', component: AmericasComponent } // Child route for America
  //   ]
  // },
  {path: 'packages/:id/iternary', component: TimelineComponent},
  {path: 'about-us', component: AboutUsComponent },
  {path: 'contact', component: ContactComponent},

  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }