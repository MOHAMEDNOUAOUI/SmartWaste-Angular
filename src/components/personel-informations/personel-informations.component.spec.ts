import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelInformationsComponent } from './personel-informations.component';

describe('PersonelInformationsComponent', () => {
  let component: PersonelInformationsComponent;
  let fixture: ComponentFixture<PersonelInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonelInformationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonelInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
