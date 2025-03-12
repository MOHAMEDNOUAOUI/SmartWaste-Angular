import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsFeatureComponent } from './complaints-feature.component';

describe('ComplaintsFeatureComponent', () => {
  let component: ComplaintsFeatureComponent;
  let fixture: ComponentFixture<ComplaintsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintsFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
