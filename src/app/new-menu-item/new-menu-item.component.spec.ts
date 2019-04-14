import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMenuItemComponent } from './new-menu-item.component';

describe('NewMenuItemComponent', () => {
  let component: NewMenuItemComponent;
  let fixture: ComponentFixture<NewMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
