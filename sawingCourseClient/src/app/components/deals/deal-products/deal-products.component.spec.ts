import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealProductsComponent } from './deal-products.component';

describe('DealProductsComponent', () => {
  let component: DealProductsComponent;
  let fixture: ComponentFixture<DealProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
