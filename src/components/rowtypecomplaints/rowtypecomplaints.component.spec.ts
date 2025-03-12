import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowtypecomplaintsComponent } from './rowtypecomplaints.component';

describe('RowtypecomplaintsComponent', () => {
  let component: RowtypecomplaintsComponent;
  let fixture: ComponentFixture<RowtypecomplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowtypecomplaintsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowtypecomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
