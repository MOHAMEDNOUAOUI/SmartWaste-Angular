import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraInformationsTaskItemComponent } from './extra-informations-task-item.component';

describe('ExtraInformationsTaskItemComponent', () => {
  let component: ExtraInformationsTaskItemComponent;
  let fixture: ComponentFixture<ExtraInformationsTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraInformationsTaskItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraInformationsTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
