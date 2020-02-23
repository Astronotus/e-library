import { Component, OnInit, Input } from '@angular/core';
import { TakenBook } from '../models/takenBook.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() aBook: TakenBook

  classBook: string = "book"

  constructor() { }

  ngOnInit() {
    this.checkExpired()
  }

  checkExpired() {
    if (this.aBook.returnDate < new Date) {
      this.classBook="redBorder"
    }
  }
}