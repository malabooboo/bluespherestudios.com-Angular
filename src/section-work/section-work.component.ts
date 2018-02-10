import {animate, query, style, transition, trigger} from '@angular/animations';
import {Component, ElementRef} from '@angular/core';


/**
 * Component for handling everything in the portfolio section.
 */
@Component({
  selector: 'section-work',
  templateUrl: './section-work.component.ng.html',
  styleUrls: ['./section-work.component.scss'],
  animations: [trigger(
      'fadeAnimation',
      [
        transition(
            ':enter',
            [style({opacity: 0}), animate('.3s', style({opacity: 1}))]),
        transition(
            ':leave',
            [style({opacity: 1}), animate('.3s', style({opacity: 0}))])
      ])],
})
export class SectionWorkComponent {
  currentWork: string = 'google-earth';

  getWork(): string {
    return this.currentWork;
  }

  setWork(work: string) {
    this.currentWork = work;
    console.log('current', this.currentWork);
  }
}
