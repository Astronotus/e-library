import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTakenBooksComponent } from './list-taken-books.component';

describe('ListTakenBooksComponent', () => {
  let component: ListTakenBooksComponent;
  let fixture: ComponentFixture<ListTakenBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTakenBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTakenBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
