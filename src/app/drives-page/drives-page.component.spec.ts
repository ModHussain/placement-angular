import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivesPageComponent } from './drives-page.component';

describe('DrivesPageComponent', () => {
  let component: DrivesPageComponent;
  let fixture: ComponentFixture<DrivesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
