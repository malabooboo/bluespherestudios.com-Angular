import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {SectionWorkComponent} from './section-work.component';
import {GoogleComponent} from './work-google.component';
import {FileMakerComponent} from './work-filemaker.component';
import {McAfeeComponent} from './work-mcafee.component';
import {CityteamComponent} from './work-cityteam.component';

import {WorkHeightService} from './work-height.service';

@NgModule({
  declarations: [
    SectionWorkComponent, GoogleComponent, FileMakerComponent, McAfeeComponent,
    CityteamComponent
  ],
  imports: [CommonModule],
  exports: [SectionWorkComponent],
  providers: [WorkHeightService],
})
export class SectionWorkModule {
}
