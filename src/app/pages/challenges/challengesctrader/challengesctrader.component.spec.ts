import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesctraderComponent } from './challengesctrader.component';

describe('ChallengesctraderComponent', () => {
  let component: ChallengesctraderComponent;
  let fixture: ComponentFixture<ChallengesctraderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengesctraderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengesctraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
