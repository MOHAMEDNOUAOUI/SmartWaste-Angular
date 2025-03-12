import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowtypefilterComponent } from './rowtypefilter.component';

describe('RowtypefilterComponent', () => {
  let component: RowtypefilterComponent;
  let fixture: ComponentFixture<RowtypefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowtypefilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowtypefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
