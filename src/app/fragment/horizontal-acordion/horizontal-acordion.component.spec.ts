import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalAcordionComponent } from './horizontal-acordion.component';

describe('HorizontalAcordionComponent', () => {
  let component: HorizontalAcordionComponent;
  let fixture: ComponentFixture<HorizontalAcordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalAcordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalAcordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
