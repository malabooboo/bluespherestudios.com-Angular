import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {SectionWorkComponent} from './section-work.component';
import {WorkCarouselInboxComponent} from './work-carousel-inbox.component';
import {WorkCarouselPetraComponent} from './work-carousel-petra.component';
import {WorkCarouselQiblaFinderComponent} from './work-carousel-qibla-finder.component';
import {WorkCarouselEarthComponent} from './work-carousel-earth.component';
import { WorkCarouselCloudBlogComponent } from './work-carousel-cloud-blog.component';

@NgModule({
  declarations: [
    SectionWorkComponent,
    WorkCarouselEarthComponent,
    WorkCarouselQiblaFinderComponent,
    WorkCarouselPetraComponent,
    WorkCarouselInboxComponent,
    WorkCarouselCloudBlogComponent
  ],
  imports: [BrowserModule],
  exports: [SectionWorkComponent]
})
export class SectionWorkModule {}
