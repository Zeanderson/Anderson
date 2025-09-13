import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasorTag } from './lasor-tag';

describe('LasorTag', () => {
  let component: LasorTag;
  let fixture: ComponentFixture<LasorTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LasorTag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LasorTag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
