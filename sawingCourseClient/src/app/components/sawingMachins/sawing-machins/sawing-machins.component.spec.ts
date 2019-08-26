import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SawingMachinsComponent } from './sawing-machins.component';

describe('SawingMachinsComponent', () => {
  let component: SawingMachinsComponent;
  let fixture: ComponentFixture<SawingMachinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SawingMachinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SawingMachinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
