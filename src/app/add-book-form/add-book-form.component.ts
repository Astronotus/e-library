import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Book } from '../models/book.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent  {

  myForm: FormGroup

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }
  private createForm() {
    this.myForm = this.formBuilder.group({
      name: "",
      author: "",
      release: "",
      genre: "",
      numberOf: ""
    });
  }
  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }


}
