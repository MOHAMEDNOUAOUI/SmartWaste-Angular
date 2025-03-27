import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintschartComponent } from './complaintschart.component';

describe('ComplaintschartComponent', () => {
  let component: ComplaintschartComponent;
  let fixture: ComponentFixture<ComplaintschartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintschartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
