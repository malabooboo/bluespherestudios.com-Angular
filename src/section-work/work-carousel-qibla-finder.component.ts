import {Component, ElementRef, Input} from '@angular/core';

/**
 * Work carousel component for Qibla Finder.
 */
@Component({
  selector: 'work-carousel-qibla-finder',
  templateUrl: './work-carousel-qibla-finder.component.html',
  styleUrls: ['./work-carousel.component.scss']
})
export class WorkCarouselQiblaFinderComponent {
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
