import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgregarPersonajeComponent } from './form-agregar-personaje.component';

describe('FormAgregarPersonajeComponent', () => {
  let component: FormAgregarPersonajeComponent;
  let fixture: ComponentFixture<FormAgregarPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAgregarPersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAgregarPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
