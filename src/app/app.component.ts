import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Observable, Subscription, timer} from 'rxjs';
// import {timer} from 'rxjs/add/observable/timer';

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
  @ViewChild('pastWorkSection') pastWorkSection: ElementRef;
  @ViewChild('statsSection') statsSection: ElementRef;
  @ViewChild('aboutSection') aboutSection: ElementRef;
  @ViewChild('contactSection') contactSection: ElementRef;
  isPastWorkInView: string;
  isStatsInView: string;
  isAboutInView: string;
  isContactInView: string;
  siteSections: String[];
  currentSection: string;
  sectionServiceSubscription: Subscription;

  constructor(private sectionService: SectionService) {}

  // Listens to the scroll position and updates the section service with the
  // current section.
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = document.documentElement.scrollTop + VISUAL_OFFSET;

    this.setCurrentSection(scrollPosition);

    this.triggerBuildIn(scrollPosition);
  }

  /**
   * Triggers a fade-in transition for content as the user scrolls down.
   */
  triggerBuildIn(scrollPosition: number) {
    const viewportHeight = document.documentElement.clientHeight;
    const adjustedPosition =
      scrollPosition + viewportHeight - viewportHeight / 2;

    // TODO(tmalabuyo): refactor this.
    // These can't be simple booleans switches:
    //     this.sectionInView = scrollPosition > this.section.offsetTop;
    // ...since I only want to get the first change.
    if (adjustedPosition > this.pastWorkSection.nativeElement.offsetTop) {
      this.isPastWorkInView = 'seen';
    }

    if (adjustedPosition > this.statsSection.nativeElement.offsetTop) {
      this.isStatsInView = 'seen';
    }

    if (adjustedPosition > this.aboutSection.nativeElement.offsetTop) {
      this.isAboutInView = 'seen';

      // Set contact in view as well, since it's so near the bottom,
      // it never reaches the adjustedPosition
      const contactTimer = timer(500);
      const sub = contactTimer.subscribe(() => (this.isContactInView = 'seen'));
    }
  }

  setCurrentSection(scrollPosition: number) {
    // Various height values
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
