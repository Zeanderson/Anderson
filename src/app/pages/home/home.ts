import { Component } from '@angular/core';
import { SharedModule } from '../../sharedModule';
import { HomeHeader } from '../../components/home-header/home-header';
import { MusicKnob } from '../../components/music-knob/music-knob';
import { model } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [SharedModule, HomeHeader, MusicKnob],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  events: any[];
  images: string[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '3000px',
      numVisible: 1,
    },
  ];

  constructor() {
    this.events = [
      {
        status: 'Software Engineer 1 at J.B. Hunt',
        date: 'March 2025 - Present',
        icon: 'pi pi-desktop',
        text: 'Maintenance and Asset Managment Team, external and internal apps',
      },
      {
        status: 'Software Engineer 1 at J.B. Hunt',
        date: 'Jul 2024 - March 2025',
        icon: 'pi pi-desktop',
        text: 'I&O Team, internal apps',
      },
      {
        status: 'Infrastrucure and Operations Intern at J.B. Hunt',
        date: 'May 2023 - May 2024',
        icon: 'pi pi-database',
        text: 'Learning',
      },
      {
        status: 'Computer Engineering Student',
        date: '2020 - 2024',
        icon: 'pi pi-graduation-cap',
        text: 'Stuff happened',
      },
    ];

    this.loadImages();
  }

  private loadImages() {
    this.images.push('../../../assets/me/band.jpeg');
    this.images.push('../../../assets/me/bye.jpeg');
    this.images.push('../../../assets/me/car.jpeg');
    this.images.push('../../../assets/me/fun1.jpeg');
    this.images.push('../../../assets/me/grad.jpeg');
    this.images.push('../../../assets/me/mountain.jpeg');
    this.images.push('../../../assets/me/ppf.jpeg');
    this.images.push('../../../assets/me/ppf2.jpeg');
    this.images.push('../../../assets/me/ppf3.jpeg');
    this.images.push('../../../assets/me/raft.jpeg');
  }
}
