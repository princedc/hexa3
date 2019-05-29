import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceleratorProgramComponent } from './accelerator-program.component';

describe('AcceleratorProgramComponent', () => {
  let component: AcceleratorProgramComponent;
  let fixture: ComponentFixture<AcceleratorProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceleratorProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceleratorProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
