import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOwlComponent } from './update-owl.component';

describe('UpdateOwlComponent', () => {
  let component: UpdateOwlComponent;
  let fixture: ComponentFixture<UpdateOwlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOwlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
