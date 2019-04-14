import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrderDetailComponent } from './search-order-detail.component';

describe('SearchOrderDetailComponent', () => {
  let component: SearchOrderDetailComponent;
  let fixture: ComponentFixture<SearchOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
