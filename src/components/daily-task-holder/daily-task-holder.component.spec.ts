import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTaskHolderComponent } from './daily-task-holder.component';

describe('DailyTaskHolderComponent', () => {
  let component: DailyTaskHolderComponent;
  let fixture: ComponentFixture<DailyTaskHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyTaskHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTaskHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
