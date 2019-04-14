import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrderDetailsComponent } from './show-order-details.component';

describe('ShowOrderDetailsComponent', () => {
  let component: ShowOrderDetailsComponent;
  let fixture: ComponentFixture<ShowOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
