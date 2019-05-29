import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorportateTrainingComponent } from './corportate-training.component';

describe('CorportateTrainingComponent', () => {
  let component: CorportateTrainingComponent;
  let fixture: ComponentFixture<CorportateTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorportateTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorportateTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
