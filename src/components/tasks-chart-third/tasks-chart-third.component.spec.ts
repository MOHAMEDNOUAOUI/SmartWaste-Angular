import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksChartThirdComponent } from './tasks-chart-third.component';

describe('TasksChartThirdComponent', () => {
  let component: TasksChartThirdComponent;
  let fixture: ComponentFixture<TasksChartThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksChartThirdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksChartThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
