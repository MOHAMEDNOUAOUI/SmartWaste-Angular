import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHolderDesignComponent } from './map-holder-design.component';

describe('MapHolderDesignComponent', () => {
  let component: MapHolderDesignComponent;
  let fixture: ComponentFixture<MapHolderDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapHolderDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapHolderDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
