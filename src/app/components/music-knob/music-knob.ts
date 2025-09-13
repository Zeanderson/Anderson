import { Component } from '@angular/core';
import { SharedModule } from '../../sharedModule';

@Component({
  selector: 'app-music-knob',
  imports: [SharedModule],
  templateUrl: './music-knob.html',
  styleUrl: './music-knob.scss',
})
export class MusicKnob {
  value!: number;
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio('lofi.mp3');
  }

  public playAudio() {
    if (this.audio) {
      this.audio.play();
    }
  }

  public changeAudioVolume() {
    if (this.audio) {
      this.audio.volume = this.value / 100;
    }
  }
}
