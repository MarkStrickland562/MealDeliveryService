import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOrderDetailComponent } from './delete-order-detail.component';

describe('DeleteOrderDetailComponent', () => {
  let component: DeleteOrderDetailComponent;
  let fixture: ComponentFixture<DeleteOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
