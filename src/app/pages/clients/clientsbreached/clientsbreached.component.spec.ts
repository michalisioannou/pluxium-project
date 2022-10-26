import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsbreachedComponent } from './clientsbreached.component';

describe('ClientsbreachedComponent', () => {
  let component: ClientsbreachedComponent;
  let fixture: ComponentFixture<ClientsbreachedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsbreachedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsbreachedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
