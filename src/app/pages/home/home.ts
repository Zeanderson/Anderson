import { Component } from '@angular/core';
import { SharedModule } from '../../sharedModule';
import { HomeHeader } from '../../components/home-header/home-header';

@Component({
  selector: 'app-home',
  imports: [SharedModule, HomeHeader],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
