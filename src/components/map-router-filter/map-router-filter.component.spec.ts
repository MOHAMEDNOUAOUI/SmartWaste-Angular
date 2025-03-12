import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRouterFilterComponent } from './map-router-filter.component';

describe('MapRouterFilterComponent', () => {
  let component: MapRouterFilterComponent;
  let fixture: ComponentFixture<MapRouterFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapRouterFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapRouterFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
