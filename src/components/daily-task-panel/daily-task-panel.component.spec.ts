import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTaskPanelComponent } from './daily-task-panel.component';

describe('DailyTaskPanelComponent', () => {
  let component: DailyTaskPanelComponent;
  let fixture: ComponentFixture<DailyTaskPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyTaskPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTaskPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
