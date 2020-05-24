import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeedingsComponent } from './weedings/weedings.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'celebrations', component: CelebrationsComponent },
  { path: 'food-and-beverage', component: FoodBeverageComponent },
  {
    path: 'foodandbeverage',
    redirectTo: 'food-and-beverage',
    pathMatch: 'full'
  },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'weedings', component: WeedingsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
