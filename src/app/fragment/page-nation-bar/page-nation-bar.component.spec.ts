import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNationBarComponent } from './page-nation-bar.component';

describe('PageNationBarComponent', () => {
  let component: PageNationBarComponent;
  let fixture: ComponentFixture<PageNationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNationBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
