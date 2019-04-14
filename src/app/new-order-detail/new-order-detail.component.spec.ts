import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderDetailComponent } from './new-order-detail.component';

describe('NewOrderDetailComponent', () => {
  let component: NewOrderDetailComponent;
  let fixture: ComponentFixture<NewOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
