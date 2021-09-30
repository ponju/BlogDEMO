import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalAcordionComponent } from './vertical-acordion.component';

describe('VerticalAcordionComponent', () => {
  let component: VerticalAcordionComponent;
  let fixture: ComponentFixture<VerticalAcordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalAcordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalAcordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
