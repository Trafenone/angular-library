import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {BookPreview} from "../models/bookPreview";
import {Book} from "../models/book";
import {BookDetail} from "../models/bookDetail";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url = 'https://localhost:5001/'

  constructor(private http: HttpClient) {
  }

  getBook(id: number) {
    return this.http.get<Book>(this.url + 'api/Task/book/' + id);
  }

  getBookDetail(id: number): Observable<BookDetail> {
    return this.http.get<BookDetail>(this.url + 'api/Task/bookDetail/' + id);
  }

  getAllBooks(): Observable<BookPreview[]> {
    return this.http.get<BookPreview[]>(this.url + 'api/Task/books?rule=all')
  }

  getRecommendedBooks(): Observable<BookPreview[]> {
    return this.http.get<BookPreview[]>(this.url + 'api/Task/books?rule=recommended')
  }

  updateBook(book: Book) {
    const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
    this.http.post<Book>(this.url + 'api/Task/save', JSON.stringify(book), {headers: myHeaders})
      .subscribe({
        next: (data: any) => console.log(data),
        error: error => console.log(error)
      })
  }
}
