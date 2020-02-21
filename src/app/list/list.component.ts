import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list:Book[]
  @Output() deleteAction = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  deleteBook(id:number){
    this.deleteAction.emit(id)
  }

}
