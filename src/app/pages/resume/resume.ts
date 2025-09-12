import { Component } from '@angular/core';
import { SharedModule } from '../../sharedModule';

@Component({
  selector: 'app-resume',
  imports: [SharedModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {}
