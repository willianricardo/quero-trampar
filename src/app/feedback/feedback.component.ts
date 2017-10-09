import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Feedback} from '../shared/models/feedback.model';
import {FeedbackService} from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbacks: Feedback[];
  subscription: Subscription;

  constructor(private feedbackService: FeedbackService) {
  }

  ngOnInit() {
    this.subscription = this.feedbackService.feedbacksChanged
      .subscribe((feedbacks: Feedback[]) => {
          this.feedbacks = feedbacks;
        }
      );

    this.feedbacks = this.feedbackService.getFeedbacks();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
