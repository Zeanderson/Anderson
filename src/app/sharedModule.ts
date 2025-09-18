import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SkeletonModule } from 'primeng/skeleton';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    ButtonModule,
    MenubarModule,
    SkeletonModule,
    CardModule,
    ProgressBarModule,
    SliderModule,
    FormsModule,
    InputIconModule,
    DialogModule,
    SplitterModule,
  ],
})
export class SharedModule {}
