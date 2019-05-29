import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelerationProgramComponent } from './acceleration-program.component';

describe('AccelerationProgramComponent', () => {
  let component: AccelerationProgramComponent;
  let fixture: ComponentFixture<AccelerationProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccelerationProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccelerationProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
