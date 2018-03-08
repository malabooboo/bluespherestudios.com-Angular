import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

/**
 * Service that keeps track of the current section.
 */
@Injectable()
export class SectionService {
  sectionSubject = new BehaviorSubject({name: ''});

  setCurrentSection(sectionName: string) {
    this.sectionSubject.next({name: sectionName});
  }

  getCurrentSection(): string {
    return this.sectionSubject.value.name;
  }
}
