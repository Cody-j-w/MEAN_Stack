import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOwlComponent } from './one-owl.component';

describe('OneOwlComponent', () => {
  let component: OneOwlComponent;
  let fixture: ComponentFixture<OneOwlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneOwlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
