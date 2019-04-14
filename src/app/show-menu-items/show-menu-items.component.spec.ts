import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMenuItemsComponent } from './show-menu-items.component';

describe('ShowMenuItemsComponent', () => {
  let component: ShowMenuItemsComponent;
  let fixture: ComponentFixture<ShowMenuItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMenuItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
