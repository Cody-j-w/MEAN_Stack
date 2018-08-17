import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOwlsComponent } from './all-owls.component';

describe('AllOwlsComponent', () => {
  let component: AllOwlsComponent;
  let fixture: ComponentFixture<AllOwlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOwlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOwlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
