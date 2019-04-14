import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMenuItemComponent } from './delete-menu-item.component';

describe('DeleteMenuItemComponent', () => {
  let component: DeleteMenuItemComponent;
  let fixture: ComponentFixture<DeleteMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
