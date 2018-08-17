import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOwlComponent } from './add-owl.component';

describe('AddOwlComponent', () => {
  let component: AddOwlComponent;
  let fixture: ComponentFixture<AddOwlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOwlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
