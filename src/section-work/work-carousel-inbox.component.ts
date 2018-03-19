import {Component, ElementRef, Input} from '@angular/core';

/**
 * Work carousel component for Inbox.
 */
@Component({
  selector: 'work-carousel-inbox',
  templateUrl: './work-carousel-inbox.component.html',
  styleUrls: ['./work-carousel.component.scss']
})
export class WorkCarouselInboxComponent {
  currentSlide = 1;
  totalSlides = 1;

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
