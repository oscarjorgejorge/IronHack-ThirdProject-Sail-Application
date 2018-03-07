import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TripsPageComponent } from './pages/trips-page/trips-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MyTripsPageComponent } from './pages/mytrips-page/mytrips-page.component';
import { TripDetailPageComponent } from './pages/trip-detail-page/trip-detail-page.component';
import { EdittripPageComponent } from './pages/edittrip-page/edittrip-page.component';

import { ProfileComponent } from './components/profile/profile.component';
import { CreateNewTripFormComponent } from './components/create-new-trip-form/create-new-trip-form.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { TripCardComponent } from './components/trip-card/trip-card.component';

import { AuthService } from './services/auth.service';
import { TripService } from './services/trip.service';

// -- guards
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { TripdetailComponent } from './components/tripdetail/tripdetail.component';

// -- routes
const routes: Routes = [
  { path: 'trips',  component: TripsPageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'trips/:id',  component: TripDetailPageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'login',  component: LoginPageComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'signup',  component: SignupPageComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'profile',  component: ProfilePageComponent, canActivate: [ RequireUserGuardService ] },
  { path: 'my-trips',  component: MyTripsPageComponent, canActivate: [ RequireUserGuardService ] },
  { path: 'my-trips/edit/:id',  component: EdittripPageComponent, canActivate: [ RequireUserGuardService ] },
  { path: '**', redirectTo: 'trips' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent,
    TripsPageComponent,
    ProfilePageComponent,
    MyTripsPageComponent,
    EdittripPageComponent,
    ProfileComponent,
    CreateNewTripFormComponent,
    TripListComponent,
    TripCardComponent,
    TripDetailPageComponent,
    TripdetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TripService, AuthService, RequireAnonGuardService, RequireUserGuardService, InitAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
