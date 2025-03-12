import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailytasksComponent } from './dailytasks.component';

describe('DailytasksComponent', () => {
  let component: DailytasksComponent;
  let fixture: ComponentFixture<DailytasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailytasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailytasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
