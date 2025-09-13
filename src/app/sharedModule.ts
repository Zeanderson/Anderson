import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SkeletonModule } from 'primeng/skeleton';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    ButtonModule,
    MenubarModule,
    SkeletonModule,
    CardModule,
    ProgressBarModule,
    KnobModule,
    FormsModule,
  ],
})
export class SharedModule {}
