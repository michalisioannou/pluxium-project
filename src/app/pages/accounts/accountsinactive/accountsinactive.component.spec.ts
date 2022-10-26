import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsinactiveComponent } from './accountsinactive.component';

describe('AccountsinactiveComponent', () => {
  let component: AccountsinactiveComponent;
  let fixture: ComponentFixture<AccountsinactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsinactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsinactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
