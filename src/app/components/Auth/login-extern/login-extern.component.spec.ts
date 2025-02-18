import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginExternComponent } from './login-extern.component';

describe('LoginExternComponent', () => {
  let component: LoginExternComponent;
  let fixture: ComponentFixture<LoginExternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginExternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginExternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
