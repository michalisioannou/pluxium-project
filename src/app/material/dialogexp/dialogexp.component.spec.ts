import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogexpComponent } from './dialogexp.component';

describe('DialogexpComponent', () => {
  let component: DialogexpComponent;
  let fixture: ComponentFixture<DialogexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
