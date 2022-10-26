import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientssuspendedComponent } from './clientssuspended.component';

describe('ClientssuspendedComponent', () => {
  let component: ClientssuspendedComponent;
  let fixture: ComponentFixture<ClientssuspendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientssuspendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientssuspendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
