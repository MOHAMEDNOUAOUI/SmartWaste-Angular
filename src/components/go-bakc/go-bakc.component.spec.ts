import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBakcComponent } from './go-bakc.component';

describe('GoBakcComponent', () => {
  let component: GoBakcComponent;
  let fixture: ComponentFixture<GoBakcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoBakcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoBakcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
