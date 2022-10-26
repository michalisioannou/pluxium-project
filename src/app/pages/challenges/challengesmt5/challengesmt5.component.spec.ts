import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challengesmt5Component } from './challengesmt5.component';

describe('Challengesmt5Component', () => {
  let component: Challengesmt5Component;
  let fixture: ComponentFixture<Challengesmt5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challengesmt5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Challengesmt5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
