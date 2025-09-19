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
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TimelineModule } from 'primeng/timeline';
import { GalleriaModule } from 'primeng/galleria';

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
    ToastModule,
    RippleModule,
    PdfViewerModule,
    TimelineModule,
    GalleriaModule,
  ],
})
export class SharedModule {}
