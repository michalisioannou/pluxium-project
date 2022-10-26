import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsallComponent } from './accountsall.component';

describe('AccountsallComponent', () => {
  let component: AccountsallComponent;
  let fixture: ComponentFixture<AccountsallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
