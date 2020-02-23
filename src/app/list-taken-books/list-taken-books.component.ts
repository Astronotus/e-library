import { Component, OnInit, Input } from '@angular/core';
import { TakenBook } from '../models/takenBook.model';

@Component({
  selector: 'app-list-taken-books',
  templateUrl: './list-taken-books.component.html',
  styleUrls: ['./list-taken-books.component.css']
})
export class ListTakenBooksComponent implements OnInit {

  @Input() isTakenList:TakenBook[]

  constructor() { }

  ngOnInit() {
  }

}
