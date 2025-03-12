import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTaskMAINTENANCEComponent } from './daily-task-maintenance.component';

describe('DailyTaskMAINTENANCEComponent', () => {
  let component: DailyTaskMAINTENANCEComponent;
  let fixture: ComponentFixture<DailyTaskMAINTENANCEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyTaskMAINTENANCEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTaskMAINTENANCEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
