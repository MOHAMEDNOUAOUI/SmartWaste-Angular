import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksChartSecondComponent } from './tasks-chart-second.component';

describe('TasksChartSecondComponent', () => {
  let component: TasksChartSecondComponent;
  let fixture: ComponentFixture<TasksChartSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksChartSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksChartSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
