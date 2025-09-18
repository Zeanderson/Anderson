import { Component } from '@angular/core';
import { SharedModule } from '../../sharedModule';

@Component({
  selector: 'app-music-knob',
  imports: [SharedModule],
  templateUrl: './music-knob.html',
  styleUrl: './music-knob.scss',
})
export class MusicKnob {
  public knobValue!: number;
  public isDialogOpen!: boolean;
  public audioButtonClass: string;
  public lofiImageClass: string;

  private audio: HTMLAudioElement;
  private audioButtonOn: boolean;

  constructor() {
    this.audio = new Audio('assets/lofi.mp3');

    this.audio.loop = true;
    this.isDialogOpen = true;
    this.audioButtonOn = false;
    this.audioButtonClass = 'pi pi-play-circle';
    this.lofiImageClass = 'lofi-png-background';
    this.knobValue = 50;
  }

  public audioButtonClick() {
    if (this.audioButtonOn) {
      this.audioButtonOn = false;
      this.audioButtonClass = 'pi pi-play-circle';
      this.lofiImageClass = 'lofi-png-background';
      this.audio.pause();
    } else {
      this.audioButtonOn = true;
      this.audioButtonClass = 'pi pi-stop-circle';
      this.lofiImageClass = 'lofi-gif-background';
      this.audio.play();
    }
  }

  public changeAudioVolume() {
    const volume = Number(this.knobValue);
    this.audio.volume = Number.isFinite(volume) ? Math.max(0, Math.min(1, volume / 100)) : 0;
  }

  public closeDialog(lamePerson: boolean) {
    if (lamePerson) {
      this.isDialogOpen = false;
    } else {
      this.audioButtonClick();
      this.isDialogOpen = false;
    }
  }
}
