import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtradaysComponent } from './extradays.component';

describe('ExtradaysComponent', () => {
  let component: ExtradaysComponent;
  let fixture: ComponentFixture<ExtradaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtradaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtradaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
