import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardnavholderComponent } from './dashboardnavholder.component';

describe('DashboardnavholderComponent', () => {
  let component: DashboardnavholderComponent;
  let fixture: ComponentFixture<DashboardnavholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardnavholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardnavholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
