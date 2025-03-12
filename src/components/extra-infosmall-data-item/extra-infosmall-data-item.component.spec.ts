import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraInfosmallDataItemComponent } from './extra-infosmall-data-item.component';

describe('ExtraInfosmallDataItemComponent', () => {
  let component: ExtraInfosmallDataItemComponent;
  let fixture: ComponentFixture<ExtraInfosmallDataItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraInfosmallDataItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraInfosmallDataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
