import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollToModule} from 'ng2-scroll-to';

import {SectionAboutComponent} from '../section-about/section-about.component';
import {SectionContactComponent} from '../section-contact/section-contact.component';
import {SectionHeroComponent} from '../section-hero/section-hero.component';
import {SectionWorkComponent} from '../section-work/section-work.component';
import {SectionService} from '../services/section.service';
import {WindowRef} from '../services/window-ref.service';
import {LogoComponent} from '../shared/logo/logo.component';
import {SvgAssetsComponent} from '../shared/svg-assets/svg-assets.component';
import {SiteFooterComponent} from '../site-footer/site-footer.component';
import {SiteHeaderComponent} from '../site-header/site-header.component';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent, LogoComponent, SiteHeaderComponent, SiteFooterComponent,
    SectionContactComponent, SectionAboutComponent, SectionHeroComponent,
    SvgAssetsComponent, SectionWorkComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, ScrollToModule.forRoot()],
  providers: [WindowRef, SectionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
