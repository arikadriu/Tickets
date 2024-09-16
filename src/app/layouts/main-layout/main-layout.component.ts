import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  activeTab: string = 'details';

  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
