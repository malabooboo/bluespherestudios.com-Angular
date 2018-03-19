import {animate, query, style, transition, trigger} from '@angular/animations';
import {Component, OnInit} from '@angular/core';

/**
 * Component for handling everything in the portfolio section.
 */
@Component({
  selector: 'section-work',
  templateUrl: './section-work.component.html',
  styleUrls: ['./section-work.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({opacity: 0}),
        animate('.3s', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('.3s', style({opacity: 0}))
      ])
    ])
  ]
})
export class SectionWorkComponent implements OnInit {
  tenure: number;
  startYear = 2013;
  currentYear = new Date().getFullYear();
  currentWork = 'google-earth';

  ngOnInit() {
    this.tenure = this.yearsSince_(this.startYear, this.currentYear);
  }

  private yearsSince_(date1: number, date2: number): number {
    return date2 - date1;
  }

  getWork(): string {
    return this.currentWork;
  }

  setWork(work: string) {
    this.currentWork = work;
  }
}
