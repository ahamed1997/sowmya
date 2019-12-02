import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { AuthenticationService } from './shared/authentication.service';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
@NgModule({
  declarations: [
    AppComponent,
    AppModule,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
     AuthenticationService
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
