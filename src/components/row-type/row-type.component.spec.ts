import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowTypeComponent } from './row-type.component';

describe('RowTypeComponent', () => {
  let component: RowTypeComponent;
  let fixture: ComponentFixture<RowTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
