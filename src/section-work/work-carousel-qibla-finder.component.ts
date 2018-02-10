import {Component, ElementRef, Input} from '@angular/core';


/**
 * Component the work carousel.
 */
@Component({
  selector: 'work-carousel-qibla-finder',
  templateUrl: './work-carousel-qibla-finder.component.ng.html',
  styleUrls: ['./work-carousel.component.scss'],
})
export class WorkCarouselQiblaFinderComponent {
  currentSlide: number = 1;
  totalSlides: number = 2;

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
