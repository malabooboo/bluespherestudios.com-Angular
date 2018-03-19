import {Component, ElementRef, Input} from '@angular/core';

/**
 * Work carousel component for Google Earth.
 */
@Component({
  selector: 'work-carousel',
  templateUrl: './work-carousel-earth.component.html',
  styleUrls: ['./work-carousel.component.scss']
})
export class WorkCarouselEarthComponent {
  currentSlide = 1;
  totalSlides = 4;

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
