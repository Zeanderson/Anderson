import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gatemate } from './gatemate';

describe('Gatemate', () => {
  let component: Gatemate;
  let fixture: ComponentFixture<Gatemate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gatemate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gatemate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
