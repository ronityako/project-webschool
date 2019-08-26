import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SawingInstructionsComponent } from './sawing-instructions.component';

describe('SawingInstructionsComponent', () => {
  let component: SawingInstructionsComponent;
  let fixture: ComponentFixture<SawingInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SawingInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SawingInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
