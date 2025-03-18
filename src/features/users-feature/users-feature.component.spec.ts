import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFeatureComponent } from './users-feature.component';

describe('UsersFeatureComponent', () => {
  let component: UsersFeatureComponent;
  let fixture: ComponentFixture<UsersFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
