import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksChartItemComponent } from './tasks-chart-item.component';

describe('TasksChartItemComponent', () => {
  let component: TasksChartItemComponent;
  let fixture: ComponentFixture<TasksChartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksChartItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksChartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
