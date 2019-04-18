import {Component, ElementRef, Input} from '@angular/core';

/**
 * Work carousel component for Google Cloud Blog.
 */
@Component({
  selector: 'work-carousel-cloud-blog',
  templateUrl: './work-carousel-cloud-blog.component.html',
  styleUrls: ['./work-carousel.component.scss']
})
export class WorkCarouselCloudBlogComponent {
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
