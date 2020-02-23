import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddBookFormComponent } from '../add-book-form/add-book-form.component';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  @Output() addBook = new EventEmitter<Book>();
  @Output() togleListAction = new EventEmitter();
  @Output() togleUserAction = new EventEmitter();
  @Input() activeUser:string;
  @Input() activeList:string;
  
  constructor(private modalService: NgbModal) {}
  
  visitor:string="visitor"
  admin:string="admin"
  fullList:string="fullList"
  takenList:string="takenList"

  togleUser(user:string){
    this.togleUserAction.emit(user)
  }

  togleList(list:string){
    this.togleListAction.emit(list)
  }

  openFormModalAddBook() {
    const modalRef = this.modalService.open(AddBookFormComponent);
    modalRef.result.then((result) => {
      this.addBook.emit(result)
    }).catch((error) => {
      console.log(error);
    });
  }
}