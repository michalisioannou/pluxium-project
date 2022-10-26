import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challengesmt4Component } from './challengesmt4.component';

describe('ChallengesctraderComponent', () => {
  let component: Challengesmt4Component;
  let fixture: ComponentFixture<Challengesmt4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challengesmt4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Challengesmt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
