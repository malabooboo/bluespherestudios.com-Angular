import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

import {SectionService} from '@services/section.service';

/**
 * The offset from the scroll position, in pixels, for which to trigger the
 * switch between the "current" sections.
 */
const VISUAL_OFFSET = 120;

@Component({
  selector: 'app',
  templateUrl: './app.component.ng.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('homeSection') homeSection: ElementRef;
  @ViewChild('workSection') workSection: ElementRef;
  @ViewChild('aboutSection') aboutSection: ElementRef;
  @ViewChild('contactSection') contactSection: ElementRef;
  windowHeight: number;
  siteSections: String[];
  currentSection: string;
  sectionServiceSubscription: Subscription;

  constructor(private sectionService: SectionService) {}

  // Listens to the scroll position and updates the section service with the
  // current section.
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Various height values
    const scrollPosition = document.documentElement.scrollTop + VISUAL_OFFSET;
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = document.documentElement.clientHeight;
    const scrollEndPosition = documentHeight - viewportHeight;

    // Section scroll positions
    const aboutSectionScrollPos = this.aboutSection.nativeElement.offsetTop;
    const workSectionScrollPos = this.workSection.nativeElement.offsetTop;
    const contactSectionScrollPos = this.contactSection.nativeElement.offsetTop;
    const lastSectionHeight = this.contactSection.nativeElement.offsetHeight;

    // Current section logic
    if (scrollPosition == 0 || scrollPosition < workSectionScrollPos) {
      this.sectionService.setCurrentSection('home');
    }
    if (
      scrollPosition >= workSectionScrollPos &&
      scrollPosition < contactSectionScrollPos
    ) {
      this.sectionService.setCurrentSection('work');
    }
    if (
      scrollPosition >= aboutSectionScrollPos &&
      scrollPosition < contactSectionScrollPos
    ) {
      this.sectionService.setCurrentSection('about');
    }
    if (scrollPosition >= scrollEndPosition) {
      this.sectionService.setCurrentSection('contact');
    }
  }

  ngOnInit() {
    this.sectionServiceSubscription = this.sectionService.sectionSubject.subscribe();
  }
}
