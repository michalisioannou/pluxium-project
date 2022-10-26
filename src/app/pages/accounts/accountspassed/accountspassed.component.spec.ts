import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountspassedComponent } from './accountspassed.component';

describe('AccountspassedComponent', () => {
  let component: AccountspassedComponent;
  let fixture: ComponentFixture<AccountspassedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountspassedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountspassedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
