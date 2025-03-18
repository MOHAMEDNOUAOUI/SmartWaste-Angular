import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesFeatureComponent } from './employees-feature.component';

describe('EmployeesFeatureComponent', () => {
  let component: EmployeesFeatureComponent;
  let fixture: ComponentFixture<EmployeesFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
