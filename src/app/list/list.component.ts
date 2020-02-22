import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditBookFormComponent } from '../edit-book-form/edit-book-form.component';
import { TakeBookFormComponent } from '../take-book-form/take-book-form.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list:Book[]
  @Output() deleteAction = new EventEmitter<number>();
  @Output() editAction = new EventEmitter<number>();
  @Output() takeBookAction = new EventEmitter<number>();
  @Output() editBookIdAction = new EventEmitter<number>();
  @Output() takeBookIdAction = new EventEmitter<number>();


  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  deleteBook(id:number){
    this.deleteAction.emit(id)
  }

  openFormModal(id:number) {
    const modalRef = this.modalService.open(EditBookFormComponent);
    this.editBookIdAction.emit(id)

    modalRef.result.then((result) => {
      this.editAction.emit(result)
    }).catch((error) => {
      console.log(error);
    });
  }

  openFormModalTakeBook(id:number) {
    const modalRef = this.modalService.open(TakeBookFormComponent);
    this.takeBookIdAction.emit(id)

    modalRef.result.then((result) => {
      this.takeBookAction.emit(result)
    }).catch((error) => {
      console.log(error);
    });
  }

}
