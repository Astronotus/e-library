import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddBookFormComponent } from '../add-book-form/add-book-form.component';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() addBook = new EventEmitter<Book>();

  constructor(private modalService: NgbModal) {

  }

  ngOnInit() {

  }

  openFormModal() {
    const modalRef = this.modalService.open(AddBookFormComponent);
    modalRef.result.then((result) => {
      this.addBook.emit(result)
    }).catch((error) => {
      console.log(error);
    });
  }

}
