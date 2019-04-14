import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuItemComponent } from './edit-menu-item.component';

describe('EditMenuItemComponent', () => {
  let component: EditMenuItemComponent;
  let fixture: ComponentFixture<EditMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
