import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsunconvertedComponent } from './clientsunconverted.component';

describe('ClientsunconvertedComponent', () => {
  let component: ClientsunconvertedComponent;
  let fixture: ComponentFixture<ClientsunconvertedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsunconvertedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsunconvertedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
