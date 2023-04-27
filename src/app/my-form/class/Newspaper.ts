export default class Newspaper {
    name: string = ''
    number: number = 0
    publication_date : Date = new Date()
    number_of_pages : number = 0
    list_of_articles: string[] = []
    constructor(name: string, number: number, publication_date: Date, number_of_pages: number, list_of_articles: string[]) {
        this.name = name
        this.number = number
        this.publication_date = publication_date
        this.number_of_pages = number_of_pages
        this.list_of_articles = list_of_articles
    }

}