import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintClientPageComponent } from './complaint-client-page.component';

describe('ComplaintClientPageComponent', () => {
  let component: ComplaintClientPageComponent;
  let fixture: ComponentFixture<ComplaintClientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintClientPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
