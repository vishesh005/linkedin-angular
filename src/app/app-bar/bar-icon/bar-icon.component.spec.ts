import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarIconComponent } from './bar-icon.component';

describe('BarIconComponent', () => {
  let component: BarIconComponent;
  let fixture: ComponentFixture<BarIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
