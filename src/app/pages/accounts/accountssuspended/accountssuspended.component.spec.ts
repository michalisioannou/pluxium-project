import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountssuspendedComponent } from './accountssuspended.component';

describe('AccountssuspendedComponent', () => {
  let component: AccountssuspendedComponent;
  let fixture: ComponentFixture<AccountssuspendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountssuspendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountssuspendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
