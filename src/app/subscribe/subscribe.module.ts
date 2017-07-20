import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubscribeRoutingModule } from './subscribe-routing.module';
import { SubscribeComponent } from './subscribe.component';
import { MessageEmailVerificationComponent } from './message-email-verification/message-email-verification.component';
import { MessageAdminVerificationComponent } from './message-admin-verification/message-admin-verification.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        SubscribeRoutingModule,
    ],
    declarations: [
        SignInComponent,
        SignUpComponent,
        SubscribeComponent,
        MessageEmailVerificationComponent,
        MessageAdminVerificationComponent,
        PasswordForgotComponent
    ],
    providers: [],
    exports: []
})
export class SubscribeModule {
}
