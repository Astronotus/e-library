import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent {

  addBookForm: FormGroup

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }
  private createForm() {
    this.addBookForm = this.formBuilder.group({
      name: "",
      author: "",
      release: "",
      genre: "",
      numberOf: ""
    });
  }
  private submitForm() {
    this.activeModal.close(this.addBookForm.value);
  }
}
