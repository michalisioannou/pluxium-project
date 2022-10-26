import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsinactiveComponent } from './clientsinactive.component';

describe('ClientsinactiveComponent', () => {
  let component: ClientsinactiveComponent;
  let fixture: ComponentFixture<ClientsinactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsinactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsinactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
