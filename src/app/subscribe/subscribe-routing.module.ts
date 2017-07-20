import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SubscribeComponent } from './subscribe.component';
import {IsLoggedAuth} from './guards/is-logged-auth/is-logged-auth';
import {MessageEmailVerificationComponent} from './message-email-verification/message-email-verification.component';
import {MessageAdminVerificationComponent} from './message-admin-verification/message-admin-verification.component';
import {PasswordForgotComponent} from './password-forgot/password-forgot.component';


const subscribeRoutes: Routes = [
  { path: '', component: SubscribeComponent, children: [
    { path: 'signup', component: SignUpComponent, canActivate: [IsLoggedAuth] },
    { path: 'signin', component: SignInComponent, canActivate: [IsLoggedAuth] },
    { path: 'emailverication', component: MessageEmailVerificationComponent, canActivate: [IsLoggedAuth] },
    { path: 'adminverication', component: MessageAdminVerificationComponent, canActivate: [IsLoggedAuth] },
    { path: 'forgot', component: PasswordForgotComponent, canActivate: [IsLoggedAuth] },
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: '**', redirectTo: 'signin', pathMatch: 'full'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(subscribeRoutes)],
  exports: [RouterModule],
  providers: [IsLoggedAuth]
})
export class SubscribeRoutingModule { }
