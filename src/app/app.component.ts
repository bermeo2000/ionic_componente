import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Action-sheet', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Accordion', url: '/acordion', icon: 'paper-plane' },
    { title: 'Card', url: '/card', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'Alert', url: '/alert', icon: 'ellipsis-vertical' },
    { title: 'Buton', url: '/button', icon: 'eye-off' },
    { title: 'Badge', url: '/badge', icon: 'eyedrop' },
    { title: 'Breadcrumbs', url: '/breadcrumbs', icon: 'expand' },
    { title: 'Checkboxes', url: '/checkboxes', icon: 'duplicate' },
    { title: 'Date-time', url: '/date-time', icon: 'chevron-down' },
    { title: 'Datetime-button', url: '/datetime-button', icon: 'cloud-circle' },
    { title: 'Ion-fab', url: '/ion-fab', icon: 'close' },
    { title: 'Grids', url: '/grids', icon: 'pause-circle' },
    { title: 'Infinite-scroll', url: '/infinite-scroll', icon: 'cloudy' },
    { title: 'Ion-input', url: '/ion-input', icon: 'body' },
    { title: 'Ion-item', url: '/ion-item', icon: 'card' },
    { title: 'Modal', url: '/modal', icon: 'create' },
    { title: 'Ion-loading', url: '/ion-loading', icon: 'golf' },
    { title: 'Skeletor', url: '/skeletor', icon: 'nuclear' },
    { title: 'refreshers', url: '/refreshers', icon: 'radio-button-on' },
    { title: 'Reorder', url: '/reorder', icon: 'medal' },
    { title: 'Searchbar', url: '/searchbar', icon: 'search' },
    { title: 'Toast', url: '/toast', icon: 'bulb' },
    { title: 'Slides', url: '/slides', icon: 'podium' },
    { title: 'Mapa', url: '/tabs', icon: 'podium' },
    { title: 'mapa-google', url: 'mapa-google', icon: 'podium' },


  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
