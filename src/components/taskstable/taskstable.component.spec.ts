import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskstableComponent } from './taskstable.component';

describe('TaskstableComponent', () => {
  let component: TaskstableComponent;
  let fixture: ComponentFixture<TaskstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskstableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
