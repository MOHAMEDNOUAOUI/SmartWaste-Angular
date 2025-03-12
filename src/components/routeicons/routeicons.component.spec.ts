import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteiconsComponent } from './routeicons.component';

describe('RouteiconsComponent', () => {
  let component: RouteiconsComponent;
  let fixture: ComponentFixture<RouteiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteiconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
