import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {SectionWorkComponent} from '../section-work/section-work.component';
import {WorkCarouselInboxComponent} from '../section-work/work-carousel-inbox.component';
import {WorkCarouselPetraComponent} from '../section-work/work-carousel-petra.component';
import {WorkCarouselQiblaFinderComponent} from '../section-work/work-carousel-qibla-finder.component';
import {WorkCarouselEarthComponent} from '../section-work/work-carousel-earth.component';

@NgModule({
  declarations: [
    SectionWorkComponent, WorkCarouselEarthComponent,
    WorkCarouselQiblaFinderComponent, WorkCarouselPetraComponent,
    WorkCarouselInboxComponent
  ],
  imports: [BrowserModule],
  exports: [SectionWorkComponent]
})
export class SectionWorkModule {}
