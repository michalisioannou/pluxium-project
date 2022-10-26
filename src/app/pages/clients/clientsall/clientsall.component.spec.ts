import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsallComponent } from './clientsall.component';

describe('ClientsallComponent', () => {
  let component: ClientsallComponent;
  let fixture: ComponentFixture<ClientsallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
