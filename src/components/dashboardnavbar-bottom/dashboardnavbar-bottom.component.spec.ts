import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardnavbarBottomComponent } from './dashboardnavbar-bottom.component';

describe('DashboardnavbarBottomComponent', () => {
  let component: DashboardnavbarBottomComponent;
  let fixture: ComponentFixture<DashboardnavbarBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardnavbarBottomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardnavbarBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
