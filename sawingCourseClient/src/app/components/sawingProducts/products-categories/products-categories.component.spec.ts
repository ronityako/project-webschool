import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoriesComponent } from './products-categories.component';

describe('SawingCategoriesComponent', () => {
  let component: ProductsCategoriesComponent;
  let fixture: ComponentFixture<ProductsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
