import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintchartsecondComponent } from './complaintchartsecond.component';

describe('ComplaintchartsecondComponent', () => {
  let component: ComplaintchartsecondComponent;
  let fixture: ComponentFixture<ComplaintchartsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintchartsecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintchartsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
