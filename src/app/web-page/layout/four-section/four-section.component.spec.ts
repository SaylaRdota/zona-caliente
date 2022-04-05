import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourSectionComponent } from './four-section.component';

describe('FourSectionComponent', () => {
  let component: FourSectionComponent;
  let fixture: ComponentFixture<FourSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
