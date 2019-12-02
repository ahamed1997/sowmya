// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { AuthenticationService } from './shared/authentication.service';
// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

// export class AppRoutingModule { 
// }

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { SignInComponent } from '../../signin/signin.component';
// import { SignupComponent } from 'src/app/signup/signup.component';
// import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
// import { ForgetPasswordComponent } from 'src/app/forget-password/forget-password.component';
// import { VerifyEmailComponent } from 'src/app/verify-email/verify-email.component';
// import { SecureInnerPagesGuard } from '../guard/secure-inner-pages.guard';
// import { AuthGuard } from '../guard/auth.guard';

// // Required components for which route services to be activated


// // Import canActivate guard services
// // import { AuthGuard } from "../../shared/guard/auth.guard";
// // import { SecureInnerPagesGuard } from "../../shared/guard/secure-inner-pages.guard";
// // import { SignInComponent } from 'src/app/signin/signin.component';
// // import { SignupComponent } from 'src/app/signup/signup.component';
// // import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
// // import { ForgetPasswordComponent } from 'src/app/forget-password/forget-password.component';
// // import { VerifyEmailComponent } from 'src/app/verify-email/verify-email.component';

// // Include route guard in routes array
// const routes: Routes = [
//   { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
//   { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
//   { path: 'register-user', component: SignupComponent, canActivate: [SecureInnerPagesGuard]},
//   { path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard] },
//   { path: 'forgot-password', component: ForgetPasswordComponent, canActivate: [SecureInnerPagesGuard] },
//   { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from '../app/signin/signin.component';
import { SignupComponent } from 'src/app/signup/signup.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { ForgetPasswordComponent } from 'src/app/forget-password/forget-password.component';
import { VerifyEmailComponent } from 'src/app/verify-email/verify-email.component';
import { SecureInnerPagesGuard } from '../app/shared/guard/secure-inner-pages.guard';
import { AuthGuard } from '../app/shared/guard/auth.guard';
import{AuthenticationService} from '../app/shared/authentication.service';
// Required components for which route services to be activated


// Import canActivate guard services
// import { AuthGuard } from "../../shared/guard/auth.guard";
// import { SecureInnerPagesGuard } from "../../shared/guard/secure-inner-pages.guard";
// import { SignInComponent } from 'src/app/signin/signin.component';
// import { SignupComponent } from 'src/app/signup/signup.component';
// import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
// import { ForgetPasswordComponent } from 'src/app/forget-password/forget-password.component';
// import { VerifyEmailComponent } from 'src/app/verify-email/verify-email.component';

// Include route guard in routes array
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SigninComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignupComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgetPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }