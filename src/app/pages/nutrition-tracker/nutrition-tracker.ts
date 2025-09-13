import { Component } from '@angular/core';
import { SharedModule } from '../../sharedModule';

@Component({
  selector: 'app-nutrition-tracker',
  imports: [SharedModule],
  templateUrl: './nutrition-tracker.html',
  styleUrl: './nutrition-tracker.scss',
})
export class NutritionTracker {}
