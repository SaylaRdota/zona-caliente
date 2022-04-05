import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixSectionComponent } from './six-section.component';

describe('SixSectionComponent', () => {
  let component: SixSectionComponent;
  let fixture: ComponentFixture<SixSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
