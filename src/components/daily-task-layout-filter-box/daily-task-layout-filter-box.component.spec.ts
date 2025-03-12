import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTaskLayoutFilterBoxComponent } from './daily-task-layout-filter-box.component';

describe('DailyTaskLayoutFilterBoxComponent', () => {
  let component: DailyTaskLayoutFilterBoxComponent;
  let fixture: ComponentFixture<DailyTaskLayoutFilterBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyTaskLayoutFilterBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTaskLayoutFilterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
