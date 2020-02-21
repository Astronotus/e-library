import { Component } from '@angular/core';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'librery';

  constructor() {
  
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

  

  addBook({name, author, release, genre, numberOf}){
    
    this.list.push(new Book(name, author, release, genre, numberOf))
  }

  deleteBook(id:number){
    this.list.splice(this.list.findIndex(book => book.id == id),1)
  }

  editBookInfo(){}

}
