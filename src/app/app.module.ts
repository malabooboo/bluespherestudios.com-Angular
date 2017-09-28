import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollToModule} from 'ng2-scroll-to';

import {SectionAboutComponent} from '../section-about/section-about.component';
import {SectionContactComponent} from '../section-contact/section-contact.component';
import {SectionWorkModule} from '../section-work/section-work.module';
import {SectionService} from '../services/section.service';
import {WindowRef} from '../services/window-ref.service';
import {LogoComponent} from '../shared/logo/logo.component';
import {SiteFooterComponent} from '../site-footer/site-footer.component';
import {SiteHeaderComponent} from '../site-header/site-header.component';

import {AppComponent} from './app.component';
import {SectionHeroComponent} from '../section-hero/section-hero.component';

@NgModule({
  declarations: [
    AppComponent, LogoComponent, SiteHeaderComponent, SiteFooterComponent,
    SectionContactComponent, SectionAboutComponent, SectionHeroComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, SectionWorkModule,
    ScrollToModule.forRoot()
  ],
  providers: [WindowRef, SectionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
