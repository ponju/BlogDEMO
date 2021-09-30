import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTogglerComponent } from './generic-toggler.component';

describe('GenericTogglerComponent', () => {
  let component: GenericTogglerComponent;
  let fixture: ComponentFixture<GenericTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericTogglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
