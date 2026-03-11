export interface Rewiew {
    id: number
    bookId: number
    userName: string
    rating: number // 1-5
    comment?: string
    createdAt: Date
}