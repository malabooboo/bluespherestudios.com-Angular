import {Component, ElementRef} from '@angular/core';

import {WorkHeightService} from './work-height.service';


/**
 * Component for a year of work in the portfolio section.
 */
@Component({
  moduleId: module.id,
  selector: 'work-mcafee',
  templateUrl: './work-mcafee.component.ng.html',
  styleUrls: ['./work.scss'],
})
export class McAfeeComponent {
  constructor(
      private el: ElementRef, private workHeightService: WorkHeightService) {}

  onImageLoad() {
    const contentHeight = this.el.nativeElement.offsetHeight;
    this.workHeightService.setHeight(contentHeight);
  }
}
