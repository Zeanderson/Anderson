import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicKnob } from './music-knob';

describe('MusicKnob', () => {
  let component: MusicKnob;
  let fixture: ComponentFixture<MusicKnob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicKnob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicKnob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
