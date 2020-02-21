import { Book } from './book.model';

export class TakenBook extends Book {

    whoTook: string
    isTakenDate: Date
    returnDate: Date
    readonly isTaken: boolean

    constructor(name: string, author: string, release: number, genre: string[], numberOf: number, whoTook: string, isTakenDate: Date, returnDate: Date) {
        super(name, author, release, genre, numberOf)
        this.whoTook = whoTook
        this.isTakenDate = isTakenDate
        this.returnDate = returnDate
        this.isTaken = true
    }
}