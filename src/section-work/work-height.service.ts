import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';


/**
 * Stores height for each year in the portfolio to allow for animations.
 */
@Injectable()
export class WorkHeightService implements OnInit {
  /**
   * The current height of the year content container.
   */
  currentHeightSubject = new Subject<number>();

  constructor() {}

  ngOnInit() {
    this.currentHeightSubject.next(667);
  }

  setHeight(height) {
    this.currentHeightSubject.next(height);
  }
}
