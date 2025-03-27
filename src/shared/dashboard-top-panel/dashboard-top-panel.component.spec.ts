import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopPanelComponent } from './dashboard-top-panel.component';

describe('DashboardTopPanelComponent', () => {
  let component: DashboardTopPanelComponent;
  let fixture: ComponentFixture<DashboardTopPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTopPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTopPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
