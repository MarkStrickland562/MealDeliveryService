import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrderDetailComponent } from './edit-order-detail.component';

describe('EditOrderDetailComponent', () => {
  let component: EditOrderDetailComponent;
  let fixture: ComponentFixture<EditOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
