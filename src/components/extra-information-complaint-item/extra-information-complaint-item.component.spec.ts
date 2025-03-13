import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraInformationComplaintItemComponent } from './extra-information-complaint-item.component';

describe('ExtraInformationComplaintItemComponent', () => {
  let component: ExtraInformationComplaintItemComponent;
  let fixture: ComponentFixture<ExtraInformationComplaintItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraInformationComplaintItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraInformationComplaintItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
