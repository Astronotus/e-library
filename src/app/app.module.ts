import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { BookComponent } from './book/book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';
import { EditBookFormComponent } from './edit-book-form/edit-book-form.component';
import { TakeBookFormComponent } from './take-book-form/take-book-form.component';
import { ListTakenBooksComponent } from './list-taken-books/list-taken-books.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    BookComponent,
    AddBookFormComponent,
    EditBookFormComponent,
    TakeBookFormComponent,
    ListTakenBooksComponent
  
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddBookFormComponent,
    EditBookFormComponent,
    TakeBookFormComponent
  ]
})
export class AppModule { }
