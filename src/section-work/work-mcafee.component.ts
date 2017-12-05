import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {WorkHeightService} from './work-height.service';


const CAROUSEL_IMAGES = '.carousel-image';

/**
 * Component for a year of work in the portfolio section.
 */
@Component({
  moduleId: module.id,
  selector: 'work-mcafee',
  templateUrl: './work-mcafee.component.ng.html',
  styleUrls: ['./work.scss'],
})
export class McAfeeComponent implements AfterViewInit {
  @ViewChild('carousel') carousel: ElementRef;

  currentImage: number = 1;
  totalImages: number;

  constructor(
      private el: ElementRef, private workHeightService: WorkHeightService) {}

  ngAfterViewInit() {
    // Gets the total number of images in the carousel.
    this.totalImages =
        this.carousel.nativeElement.querySelectorAll(CAROUSEL_IMAGES).length;
  }

  /**
   * Sets the height of the container div after the first image has loaded.
   */
  onImageLoad() {
    const contentHeight = this.el.nativeElement.offsetHeight;
    this.workHeightService.setHeight(contentHeight);
  }

  /**
   * Cycles through the image carousel when the image itself is clicked.
   */
  cycleImage(event: Event) {
    const imgEl = <Element>event.target;
    let thisImage = +imgEl.getAttribute('data-position');

    let nextImage;
    if (thisImage == this.totalImages) {
      nextImage = 1;
    } else {
      nextImage = thisImage + 1;
    }
    this.setCurrentImage(nextImage);
  }

  getCurrentImage(): number {
    return this.currentImage;
  }

  setCurrentImage(newImage: number) {
    this.currentImage = newImage;
  }
}
