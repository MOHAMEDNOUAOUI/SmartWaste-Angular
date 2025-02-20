import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTextComponent } from './reg-text.component';

describe('RegTextComponent', () => {
  let component: RegTextComponent;
  let fixture: ComponentFixture<RegTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
