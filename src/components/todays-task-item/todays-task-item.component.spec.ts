import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysTaskItemComponent } from './todays-task-item.component';

describe('TodaysTaskItemComponent', () => {
  let component: TodaysTaskItemComponent;
  let fixture: ComponentFixture<TodaysTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaysTaskItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
