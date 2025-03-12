import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiledatacomponentComponent } from './profiledatacomponent.component';

describe('ProfiledatacomponentComponent', () => {
  let component: ProfiledatacomponentComponent;
  let fixture: ComponentFixture<ProfiledatacomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfiledatacomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiledatacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
