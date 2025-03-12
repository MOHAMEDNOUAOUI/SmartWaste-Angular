import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelInformationsHeaderComponent } from './personel-informations-header.component';

describe('PersonelInformationsHeaderComponent', () => {
  let component: PersonelInformationsHeaderComponent;
  let fixture: ComponentFixture<PersonelInformationsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonelInformationsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonelInformationsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
