import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuardAutenticated} from '../auth/auth-guard-autenticated.service';
import {FeedbackComponent} from './feedback.component';
import {AuthGuardAdministrator} from '../auth/auth-guard-administrator.service';

const feedbackRoutes: Routes = [
  {
    path: '',
    component: FeedbackComponent,
    canActivate: [AuthGuardAutenticated, AuthGuardAdministrator]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(feedbackRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuardAutenticated,
    AuthGuardAdministrator
  ]
})
export class FeedbackRoutingModule {
}
