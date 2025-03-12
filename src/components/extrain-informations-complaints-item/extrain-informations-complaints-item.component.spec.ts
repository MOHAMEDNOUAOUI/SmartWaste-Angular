import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrainInformationsComplaintsItemComponent } from './extrain-informations-complaints-item.component';

describe('ExtrainInformationsComplaintsItemComponent', () => {
  let component: ExtrainInformationsComplaintsItemComponent;
  let fixture: ComponentFixture<ExtrainInformationsComplaintsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtrainInformationsComplaintsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtrainInformationsComplaintsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
