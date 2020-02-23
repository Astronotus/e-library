import { Component, } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../models/book.model';
import { LibraryService } from '../service/library.service';

@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.css']
})
export class EditBookFormComponent {

  editBookForm: FormGroup

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private libreryService: LibraryService
  ) {
    const asynCreateForm = async () => {
      const result = await libreryService;
      this.createForm(result.activeBook)
    }
    asynCreateForm()
  }
  private createForm(book: Book) {
    this.editBookForm = this.formBuilder.group({
      name: new FormControl(book.name),
      author: new FormControl(book.author),
      release: new FormControl(book.release),
      genre: new FormControl(book.genre),
      numberOf: new FormControl(book.numberOf)
    });
  }
  private submitForm() {
    this.activeModal.close(this.editBookForm.value);
  }
}
