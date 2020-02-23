import { Component } from '@angular/core';
import { Book } from './models/book.model';
import { LibraryService } from './service/library.service';
import { TakenBook } from './models/takenBook.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'librery';

  constructor(private libreryService: LibraryService) { }

  list: Book[] = [new Book("1984", "Джордж Оруэлл", 1997, ["Детектив", "Научный"], 5),
  new Book("451° по Фаренгейту", "Рей Брэдбери", 1999, ["Детектив", "Научный"], 5),
  new Book("Шантарам", "Грегори Дэвид Робертс", 2003, ["Детектив", "Научный"], 5),
  new Book("Мастер и Маргарита", "Михаил Афанасьевич Булгаков", 2011, ["Детектив", "Научный"], 5),
  new Book("Три товарища", "Эрих Мария Ремарк", 1995, ["Детектив", "Научный"], 5),
  new Book("Анна Каренина", "Лев Толстой", 1956, ["Детектив", "Научный"], 5),
  new Book("Над пропастью во лжи", "Джером Д. Сэлинджер", 2003, ["Детектив", "Научный"], 5),
  new Book("Портрет Дориана Грея", "Оскар Уайльд", 1984, ["Детектив", "Научный"], 5),
  new Book("Маленький принц", "Антуан де Сент-Экзюпери", 1967, ["Детектив", "Научный"], 5),
  ]
  isTakenList: TakenBook[] = [new TakenBook(4, "Мастер и Маргарита", "Михаил Афанасьевич Булгаков", 2011, ["Детектив", "Научный"], "Кирил", new Date("2018-10-10")),
  new TakenBook(4, "Мастер и Маргарита", "Михаил Афанасьевич Булгаков", 2011, ["Детектив", "Научный"], "Василий", new Date("2020-10-10"))]
  activeUser: string = "visitor"
  activeList: string = "fullList"

  togleUser(user: string) {
    this.activeUser = user
  }

  togleList(list: string) {
    this.activeList = list
  }

  addBook({ name, author, release, genre, numberOf }) {
    let genreArr: string[]
    genreArr = genre.split(",")
    this.list.push(new Book(name, author, release, genreArr, numberOf))
  }

  deleteBook(id: number) {
    this.list.splice(this.list.findIndex(book => book.id == id), 1)
  }

  serchActiveBookIndexId() {
    return this.list.findIndex(book => book.id == this.libreryService.activeBook.id)
  }

  editBook({ name, author, release, genre, numberOf }) {
    this.list[this.serchActiveBookIndexId()].name = name
    this.list[this.serchActiveBookIndexId()].author = author
    this.list[this.serchActiveBookIndexId()].release = release
    this.list[this.serchActiveBookIndexId()].genre = genre
    this.list[this.serchActiveBookIndexId()].numberOf = numberOf
  }

  returnBook(id: number) {
    if (this.isTakenList.find(book => book.id == id)) {
      this.isTakenList.splice(this.isTakenList.findIndex(book => book.id == id), 1)
      ++this.list[this.list.findIndex(book => book.id == id)].numberOf
    }
    else alert("Мы такую книгу вам не давали")
  }

  editBookId(id: number) {
    this.libreryService.activeBook = this.list[this.list.findIndex(book => book.id == id)]
  }

  takeBookId(id: number) {
    this.libreryService.activeBook = this.list[this.list.findIndex(book => book.id == id)]
  }

  takeBook({ whoTook, returnDate }) {
    let actBook = this.libreryService.activeBook
    if (this.libreryService.activeBook.numberOf > 0) {
      --this.list[this.serchActiveBookIndexId()].numberOf
      this.isTakenList.push(new TakenBook(actBook.id, actBook.name, actBook.author, actBook.release, actBook.genre, whoTook, returnDate))
    }
    else alert("Книги закончились")
  }
}
