import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewModelFormComponent } from './new-model-form.component';

describe('NewModelFormComponent', () => {
  let component: NewModelFormComponent;
  let fixture: ComponentFixture<NewModelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewModelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
