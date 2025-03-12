import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWorkerPanelComponent } from './dashboard-worker-panel.component';

describe('DashboardWorkerPanelComponent', () => {
  let component: DashboardWorkerPanelComponent;
  let fixture: ComponentFixture<DashboardWorkerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWorkerPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWorkerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
