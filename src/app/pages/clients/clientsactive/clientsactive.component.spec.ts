import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsactiveComponent } from './clientsactive.component';

describe('ClientsactiveComponent', () => {
  let component: ClientsactiveComponent;
  let fixture: ComponentFixture<ClientsactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
