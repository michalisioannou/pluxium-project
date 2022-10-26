import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsactiveComponent } from './accountsactive.component';

describe('AccountsactiveComponent', () => {
  let component: AccountsactiveComponent;
  let fixture: ComponentFixture<AccountsactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
