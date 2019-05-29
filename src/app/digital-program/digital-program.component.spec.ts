import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalProgramComponent } from './digital-program.component';

describe('DigitalProgramComponent', () => {
  let component: DigitalProgramComponent;
  let fixture: ComponentFixture<DigitalProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
