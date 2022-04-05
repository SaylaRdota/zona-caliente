import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveSectionComponent } from './five-section.component';

describe('FiveSectionComponent', () => {
  let component: FiveSectionComponent;
  let fixture: ComponentFixture<FiveSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
