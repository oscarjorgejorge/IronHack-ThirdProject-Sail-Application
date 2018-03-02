import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TripsPageComponent } from './pages/trips-page/trips-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { ProfileComponent } from './components/profile/profile.component';

import { AuthService } from './services/auth.service';
// -- guards
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MytripsPageComponent } from './pages/mytrips-page/mytrips-page.component';

// -- routes
const routes: Routes = [
  { path: 'trips',  component: TripsPageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'login',  component: LoginPageComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'signup',  component: SignupPageComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'profile',  component: ProfilePageComponent, canActivate: [ RequireUserGuardService ] },
  { path: 'my-trips',  component: MytripsPageComponent, canActivate: [ RequireUserGuardService ] },


  // { path: 'page',  component: ... , canActivate: [ RequireUserGuardService ] },
  { path: '**', redirectTo: 'trips' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent,
    TripsPageComponent,
    ProfilePageComponent,
    MytripsPageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, RequireAnonGuardService, RequireUserGuardService, InitAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
