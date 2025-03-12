import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInputHolderComponent } from './profile-input-holder.component';

describe('ProfileInputHolderComponent', () => {
  let component: ProfileInputHolderComponent;
  let fixture: ComponentFixture<ProfileInputHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileInputHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileInputHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
