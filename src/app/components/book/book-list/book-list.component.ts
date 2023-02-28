import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {BookPreview} from "../../../models/bookPreview";
import {BooksService} from "../../../services/books.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Output() onClickShow = new EventEmitter<number>();
  @Output() onClickEdit = new EventEmitter<number>();
  data$: Observable<BookPreview[]>;

  constructor(private service: BooksService) {
    this.data$ = service.getAllBooks();
    this.data$.subscribe((val) => console.log(val))
  }

  loadAll() {
    this.data$ = this.service.getAllBooks();
    this.data$.subscribe((val) => console.log(val))
  }

  loadRecommended() {
    this.data$ = this.service.getRecommendedBooks();
  }

  showBook(num: any) {
    this.onClickShow.emit(num);
  }

  editBook(num: any) {
    this.onClickEdit.emit(num);
  }

  ngOnInit(): void {
    this.loadAll();
  }
}
