export class Book {
    id: number
    name: string
    author: string
    release: number
    genre: string[]
    numberOf?: number
    readonly isTaken: boolean
    static idMaker: number = 0

    constructor(name: string, author: string, release: number, genre: string[], numberOf?: number) {
        this.id = this.generateId()
        this.name = name
        this.author = author
        this.release = release
        this.genre = genre
        this.numberOf = numberOf
        this.isTaken = false
    }

    generateId(): number {
        return ++Book.idMaker
    }
}