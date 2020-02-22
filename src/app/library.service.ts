import { Injectable } from '@angular/core';
import { Book } from './models/book.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor() { }

  activeBookEditModal:Book

}
