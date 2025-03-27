import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerAdminPageComponent } from './worker-admin-page.component';

describe('WorkerAdminPageComponent', () => {
  let component: WorkerAdminPageComponent;
  let fixture: ComponentFixture<WorkerAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerAdminPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
