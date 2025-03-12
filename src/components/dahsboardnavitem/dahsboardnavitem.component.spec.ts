import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DahsboardnavitemComponent } from './dahsboardnavitem.component';

describe('DahsboardnavitemComponent', () => {
  let component: DahsboardnavitemComponent;
  let fixture: ComponentFixture<DahsboardnavitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DahsboardnavitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DahsboardnavitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
