import { Component } from '@angular/core';
import { SharedModule } from '../../sharedModule';
import { HomeHeader } from '../../components/home-header/home-header';

@Component({
  selector: 'app-resume',
  imports: [SharedModule, HomeHeader],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {}
