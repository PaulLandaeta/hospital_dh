import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpecialtyComponent } from './new-specialty.component';

describe('NewSpecialtyComponent', () => {
  let component: NewSpecialtyComponent;
  let fixture: ComponentFixture<NewSpecialtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSpecialtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSpecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
