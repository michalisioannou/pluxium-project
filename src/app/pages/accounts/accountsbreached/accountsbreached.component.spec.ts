import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsbreachedComponent } from './accountsbreached.component';

describe('AccountsbreachedComponent', () => {
  let component: AccountsbreachedComponent;
  let fixture: ComponentFixture<AccountsbreachedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsbreachedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsbreachedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
