import { Component } from '@angular/core';
import { SharedModule } from '../../sharedModule';
import { Router } from '@angular/router';
import { StyleClass } from 'primeng/styleclass';

@Component({
  selector: 'app-home-header',
  imports: [SharedModule],
  templateUrl: './home-header.html',
  styleUrl: './home-header.scss',
})
export class HomeHeader {
  constructor(private router: Router) {}
  public menuItems = [
    {
      label: 'Projects',
      icon: 'pi pi-book',
      badge: '3',
      items: [
        {
          label: 'Gatemate',
          icon: 'pi pi-sitemap',
          command: () => this.onMenuItemClick('/gatemate'),
        },
        {
          label: 'Nutrition Tracker',
          icon: 'pi pi-box',
          command: () => this.onMenuItemClick('/nutritionTracker'),
        },
        {
          label: 'Lasor Tag System',
          icon: 'pi pi-desktop',
          command: () => this.onMenuItemClick('/lasorTag'),
        },
      ],
    },
    {
      label: 'Resume',
      icon: 'pi pi-file',
      command: () => this.onMenuItemClick('/resume'),
    },
  ];

  private onMenuItemClick(path: string) {
    this.router.navigate([path]);
  }
}
