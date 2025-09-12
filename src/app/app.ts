import { Component } from '@angular/core';
import { SharedModule } from './sharedModule';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [SharedModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
