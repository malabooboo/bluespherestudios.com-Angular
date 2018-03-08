import {Component, ElementRef, Input} from '@angular/core';

/**
 * Component the work carousel.
 */
@Component({
  selector: 'work-carousel-petra',
  templateUrl: './work-carousel-petra.component.ng.html',
  styleUrls: ['./work-carousel.component.scss']
})
export class WorkCarouselPetraComponent {
  currentSlide = 1;
  totalSlides = 2;

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
