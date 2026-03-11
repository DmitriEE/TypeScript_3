export interface Book {
    id: number
    title: string
    isbn: number
    publishedYear: number
    pageCount: number
    language: string
    description: string
    coverimage?: File
    authorId: number
    publisherId: number
    genres: string[]
    createdAt: Date
    updatedAt: Date
}