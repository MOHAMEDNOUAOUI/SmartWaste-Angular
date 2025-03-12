import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponentForComplaintsComponent } from './map-component-for-complaints.component';

describe('MapComponentForComplaintsComponent', () => {
  let component: MapComponentForComplaintsComponent;
  let fixture: ComponentFixture<MapComponentForComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapComponentForComplaintsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapComponentForComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
