export type Book = {
  id: number
  title: string
  author: string
  coverImage: string
  publisher: string
  categories: string[]
  status: 'available' | 'borrowed'
  }
  