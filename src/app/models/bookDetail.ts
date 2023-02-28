import {Review} from "./review";

export interface BookDetail {
  id: number
  title:string
  author: string
  genre: string
  cover: string
  content: string
  rating: number
  reviews: Review[]
}
