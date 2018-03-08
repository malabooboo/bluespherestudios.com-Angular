import {Component, ElementRef, Input} from '@angular/core';

/**
 * Component the work carousel.
 */
@Component({
  selector: 'work-carousel',
  templateUrl: './work-carousel-earth.component.ng.html',
  styleUrls: ['./work-carousel.component.scss']
})
export class WorkCarouselEarthComponent {
  currentSlide = 1;
  totalSlides = 3;

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
