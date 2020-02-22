import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-take-book-form',
  templateUrl: './take-book-form.component.html',
  styleUrls: ['./take-book-form.component.css']
})
export class TakeBookFormComponent  {

  takeBookForm: FormGroup

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }
  private createForm() {
    this.takeBookForm = this.formBuilder.group({
      whoTook: "",
      returnDate:""
    });
  }
  private submitForm() {
    this.activeModal.close(this.takeBookForm.value);
  }

}
