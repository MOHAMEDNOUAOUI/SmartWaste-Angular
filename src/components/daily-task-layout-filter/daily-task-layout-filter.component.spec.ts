import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTaskLayoutFilterComponent } from './daily-task-layout-filter.component';

describe('DailyTaskLayoutFilterComponent', () => {
  let component: DailyTaskLayoutFilterComponent;
  let fixture: ComponentFixture<DailyTaskLayoutFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyTaskLayoutFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTaskLayoutFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
