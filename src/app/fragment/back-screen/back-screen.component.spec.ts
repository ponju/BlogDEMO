import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackScreenComponent } from './back-screen.component';

describe('BackScreenComponent', () => {
  let component: BackScreenComponent;
  let fixture: ComponentFixture<BackScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
