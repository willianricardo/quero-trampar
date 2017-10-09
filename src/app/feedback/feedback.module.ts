import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedbackRoutingModule} from './feedback-routing.module';
import {FeedbackComponent} from './feedback.component';
import { FeedbackItemComponent } from './feedback-item/feedback-item.component';
import {MomentModule} from 'angular2-moment';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    FeedbackRoutingModule,
    SharedModule
  ],
  declarations: [
    FeedbackComponent,
    FeedbackItemComponent
  ]
})
export class FeedbackModule {
}
