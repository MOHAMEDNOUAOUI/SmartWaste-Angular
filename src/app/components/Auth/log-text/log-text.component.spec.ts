import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTextComponent } from './log-text.component';

describe('LogTextComponent', () => {
  let component: LogTextComponent;
  let fixture: ComponentFixture<LogTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
