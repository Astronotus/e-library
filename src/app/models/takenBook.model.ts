
// Знаю что нужно было использовать наследование от просто книги, но у меня началиcm проблемы с id
export class TakenBook {
    id: number
    name: string
    author: string
    release: number
    genre: string[]
    whoTook: string
    isTakenDate: Date
    returnDate: Date
    readonly isTaken: boolean

    constructor(id: number, name: string, author: string, release: number, genre: string[], whoTook: string, returnDate: Date) {
        this.id = id
        this.name = name
        this.author = author
        this.release = release
        this.genre = genre
        this.whoTook = whoTook
        this.isTakenDate = new Date()
        this.returnDate = returnDate
        this.isTaken = true
    }
}