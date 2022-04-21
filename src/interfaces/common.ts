export interface IStore {
    ImageReducer: {
        books: IBooks
        loadingImages: boolean
    }
}

export interface IBooks {
    items: IBook[]
    totalItems: number
}

export interface IBook {
    id: number
    volumeInfo: {
        imageLinks?: {
            thumbnail: string
        }
        description: string
        title: string
        authors: string[]
        categories: string[]
    }
}