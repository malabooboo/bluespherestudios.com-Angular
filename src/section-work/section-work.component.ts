import {animate, Component, ElementRef, Input, OnInit, style, transition, trigger, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {CityteamComponent} from './work-cityteam.component';
import {FileMakerComponent} from './work-filemaker.component';
import {GoogleComponent} from './work-google.component';
import {McAfeeComponent} from './work-mcafee.component';

import {WorkHeightService} from './work-height.service';


/**
 * Component for handling everything in the portfolio section.
 */
@Component({
  moduleId: module.id,
  selector: 'section-work',
  templateUrl: './section-work.component.ng.html',
  providers: [WorkHeightService],
  styleUrls: ['./section-work.component.scss'],
  animations: [trigger(
      'fadeInOut',
      [
        transition(
            ':enter',
            [
              style({transform: 'translateX(-30px)', opacity: '0'}),
              animate(
                  '300ms ease-out',
                  style({transform: 'translateX(0)', opacity: '1'}))
            ]),
        transition(
            ':leave',
            [
              style({transform: 'translateX(0)', opacity: '1'}),
              animate(
                  '300ms ease-out',
                  style({transform: 'translateX(30px)', opacity: '0'}))
            ])
      ])],
})
export class SectionWorkComponent implements OnInit {
  /**
   * Content initally set as current.
   */
  @ViewChild('currentOnLoad') currentOnLoad: ElementRef;

  /**
   * Content container for resizing the height.
   */
  @ViewChild('heightContainer') heightContainer: ElementRef;

  currentContentHeight: number;

  /**
   * The currently shown content tab.
   */
  currentContent: String;

  /**
   * Subscription to the modal service.
   */
  modalSubscription: Subscription;

  constructor(private workHeightService: WorkHeightService) {}

  ngOnInit() {
    this.currentOnLoad.nativeElement.click();

    // Updates parent container height.
    this.workHeightService.currentHeightSubject.subscribe((height) => {
      // TODO(tmalabuyo): Find out why this needs to be wrapped in a
      //   setTimeout to get rid of the "Expression has changed after it was
      //   checked" error.
      window.setTimeout(() => {
        this.currentContentHeight = height;
      }, 100);
    });

    // Set the current height of the first tabbed content (Google)
    this.setCurrentContent('Google');
  }

  /**
   * Sets the year content to display.
   */
  setCurrentContent(work: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }

    this.currentContent = work;

    // Update the height in the service.
    window.setTimeout(() => {
      console.log(this.currentContentHeight);
      this.workHeightService.setHeight(this.currentContentHeight);
    }, 50);
  }

  /**
   * Checks to see if the passed year parameter is the current year content.
   */
  isCurrentContent(work: string): Boolean {
    return this.currentContent == work;
  }
}
