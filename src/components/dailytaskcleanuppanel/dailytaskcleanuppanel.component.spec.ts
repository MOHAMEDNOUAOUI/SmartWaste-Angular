import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailytaskcleanuppanelComponent } from './dailytaskcleanuppanel.component';

describe('DailytaskcleanuppanelComponent', () => {
  let component: DailytaskcleanuppanelComponent;
  let fixture: ComponentFixture<DailytaskcleanuppanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailytaskcleanuppanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailytaskcleanuppanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
