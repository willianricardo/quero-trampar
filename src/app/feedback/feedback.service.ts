import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {Feedback} from '../shared/models/feedback.model';

@Injectable()
export class FeedbackService {

  public feedbacksChanged = new Subject<Feedback[]>();

  private feedbacks: Feedback[] = [];

  constructor(private db: AngularFireDatabase) {
    db.list('feedbacks', {preserveSnapshot: true})
      .subscribe(
        snapshots => {
          const feedbacks: Feedback[] = snapshots.map(snapshot => {
            const feedback: Feedback = snapshot.val();
            feedback.uid = snapshot.key;
            return feedback;
          });

          this.setFeedbacks(feedbacks);
        }
      );
  }

  getFeedbacks() {
    return this.feedbacks = this.feedbacks.slice();
  }

  setFeedbacks(feedbacks: Feedback[]) {
    this.feedbacks = feedbacks;
    this.feedbacksChanged.next(this.feedbacks.slice());
  }

  getFeedback(id: string) {
    return this.db.object('feedbacks/' + id);
  }

  setFeedback(feedback) {
    return this.db.list('feedbacks')
      .push(feedback)
      .then(success => {
          feedback.uid = success.key;

          this.db.object('feedbacks/' + success.key)
            .update(feedback);

          return success;
        }
      );
  }

  updateFeedback(feedback) {
    return this.db.object('feedbacks/' + feedback.uid).update(feedback);
  }
}
