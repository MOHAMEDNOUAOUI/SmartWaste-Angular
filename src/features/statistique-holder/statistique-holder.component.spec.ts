import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueHolderComponent } from './statistique-holder.component';

describe('StatistiqueHolderComponent', () => {
  let component: StatistiqueHolderComponent;
  let fixture: ComponentFixture<StatistiqueHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatistiqueHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiqueHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
