import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTaskCleanUPComponent } from './daily-task-clean-up.component';

describe('DailyTaskCleanUPComponent', () => {
  let component: DailyTaskCleanUPComponent;
  let fixture: ComponentFixture<DailyTaskCleanUPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyTaskCleanUPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTaskCleanUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
