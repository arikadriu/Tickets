import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent {
  @Input() name: string = '';

  get iconPath(): string {
    switch (this.name) {
      case 'details':
        return 'assets/icons/icon-details.svg';
      case 'activity':
        return 'assets/icons/icon-activity.svg';
      case 'comments':
        return 'assets/icons/icon-comments.svg';
      case 'logicpilot':
        return 'assets/icons/icon-logicpilot.svg';
      case 'attachments':
        return 'assets/icons/icon-attachments.svg';
      case 'checkmark':
        return 'assets/icons/icon-checkmark.svg';
      case 'coowner':
        return 'assets/icons/icon-coowner.svg';
      case 'coowner':
        return 'assets/icons/icon-coowner.svg';
      case 'customername':
        return 'assets/icons/icon-customername.svg';
      case 'details':
        return 'assets/icons/icon-details.svg';
      case 'importance':
        return 'assets/icons/icon-importance.svg';
      case 'invoiceid':
        return 'assets/icons/icon-invoiceid.svg';
      case 'status':
        return 'assets/icons/icon-status.svg';
      case 'assignee':
        return 'assets/icons/icon-assignee.svg';
      case 'addsubtask':
        return 'assets/icons/icon-addsubtask.svg';
      default:
        return '';
    }
  }
}