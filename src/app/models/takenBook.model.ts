import { Book } from './book.model';

export class TakenBook  {

    id: number
    name: string
    author: string
    release: number
    genre: string[]
    
    numberOfTakenBook:number
    whoTook: string
    isTakenDate: Date
    returnDate: Date
    readonly isTaken: boolean

    constructor(id:number, name: string, author: string, release: number, genre: string[], whoTook: string, returnDate: Date) {

        this.id=id
        this.name = name
        this.author = author
        this.release = release
        this.genre = genre
        this.whoTook = whoTook
        this.isTakenDate = new Date()
        this.returnDate = returnDate
        this.isTaken = true
        this.numberOfTakenBook=1
    }
}