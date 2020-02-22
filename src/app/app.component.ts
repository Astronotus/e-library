import { Component } from '@angular/core';
import { Book } from './models/book.model';
import { LibraryService } from './library.service';
import { TakenBook } from './models/takenBook.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'librery';

  constructor(private libreryService: LibraryService) {

  }

  list: Book[] = [new Book("Гарри Поттер", "alex", 1997, ["detective"], 5),
  new Book("Маугли", "inna", 1999, ["detective"], 5),
  new Book("Робинзон Крузо", "cvets", 2003, ["comedy"], 5),
  new Book("Таинственный Остров", "lera", 2011, ["detective"], 5),
  new Book("Томм Соййер", "andry", 2011, ["fantasy"], 5),
  new Book("Война и мир", "andry", 2011, ["fantasy"], 5),
  new Book("Успешный успех", "andry", 2011, ["fantasy"], 5),
  new Book("Автомобили", "andry", 2011, ["fantasy"], 5),
  new Book("Девятая книга", "andry", 2011, ["fantasy"], 5),
  ]

  isTakenList: TakenBook[]=[]

  addBook({ name, author, release, genre, numberOf }) {

    this.list.push(new Book(name, author, release, genre, numberOf))
  }

  deleteBook(id: number) {
    this.list.splice(this.list.findIndex(book => book.id == id), 1)
  }

  editBook({ name, author, release, genre, numberOf }) {
    this.list[this.serchIndexId()].name = name
    this.list[this.serchIndexId()].author = author
    this.list[this.serchIndexId()].release = release
    this.list[this.serchIndexId()].genre = genre
    this.list[this.serchIndexId()].numberOf = numberOf
  }

  serchIndexId() {
    return this.list.findIndex(book => book.id == this.libreryService.activeBookEditModal.id)
  }

  editBookId(id: number) {
    this.libreryService.activeBookEditModal = this.list[this.list.findIndex(book => book.id == id)]
  }

  takeBookId(id: number) {
    this.libreryService.activeBookEditModal = this.list[this.list.findIndex(book => book.id == id)]
  }

  takeBook({ whoTook, returnDate }) {
    
    if(this.libreryService.activeBookEditModal.numberOf>0){

      --this.list[this.serchIndexId()].numberOf

      this.isTakenList.push(new TakenBook(this.libreryService.activeBookEditModal.id,
        this.libreryService.activeBookEditModal.name,
        this.libreryService.activeBookEditModal.author,
        this.libreryService.activeBookEditModal.release,
        this.libreryService.activeBookEditModal.genre, 
        whoTook, 
        returnDate
      ))

    

    }
    else alert("Книги закончились")

    console.log(this.isTakenList)
  }

}
