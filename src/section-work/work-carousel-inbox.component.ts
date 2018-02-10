import {Component, ElementRef, Input} from '@angular/core';


/**
 * Component the work carousel.
 */
@Component({
  selector: 'work-carousel-inbox',
  templateUrl: './work-carousel-inbox.component.ng.html',
  styleUrls: ['./work-carousel.component.scss'],
})
export class WorkCarouselInboxComponent {
  currentSlide: number = 1;
  totalSlides: number = 1;

  getCurrentSlide() {
    return this.currentSlide;
  }

  getLastSlide() {
    return this.totalSlides;
  }

  setPreviousSlide() {
    this.currentSlide = this.getCurrentSlide() - 1;
  }

  setNextSlide() {
    this.currentSlide = this.getCurrentSlide() + 1;
  }
}
