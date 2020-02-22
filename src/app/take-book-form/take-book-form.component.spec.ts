import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeBookFormComponent } from './take-book-form.component';

describe('TakeBookFormComponent', () => {
  let component: TakeBookFormComponent;
  let fixture: ComponentFixture<TakeBookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeBookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
