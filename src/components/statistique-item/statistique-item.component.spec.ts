import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueItemComponent } from './statistique-item.component';

describe('StatistiqueItemComponent', () => {
  let component: StatistiqueItemComponent;
  let fixture: ComponentFixture<StatistiqueItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatistiqueItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiqueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
