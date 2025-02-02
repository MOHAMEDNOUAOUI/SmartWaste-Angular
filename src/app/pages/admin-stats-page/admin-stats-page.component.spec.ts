import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatsPageComponent } from './admin-stats-page.component';

describe('AdminStatsPageComponent', () => {
  let component: AdminStatsPageComponent;
  let fixture: ComponentFixture<AdminStatsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminStatsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
