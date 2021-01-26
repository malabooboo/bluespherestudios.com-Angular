import {Component, ElementRef, Input} from '@angular/core';

/**
 * Work carousel component for Google Stadia.
 */
@Component({
  selector: 'work-carousel-google-stadia',
  templateUrl: './work-carousel-stadia.component.html',
  styleUrls: ['./work-carousel.component.scss']
})
export class WorkCarouselStadiaComponent {
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
