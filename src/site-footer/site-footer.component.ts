import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'site-footer',
  template: `
  <footer>
    <div class="site-width">
      <p>Copyright &copy; 2002 - {{currentYear}} Blue Sphere Studios</p>
    </div>
  </footer>
  `,
  styleUrls: ['./site-footer.component.scss']
})
export class SiteFooterComponent implements OnInit {
  currentYear: number;

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
