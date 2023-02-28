import {Component, EventEmitter, Input, Output,} from '@angular/core';
import {BookPreview} from "../../../models/bookPreview";

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent {
  @Input() book!: BookPreview;
  @Output() onClickShow = new EventEmitter<number>();
  @Output() onClickEdit = new EventEmitter<number>();

  showBook() {
    this.onClickShow.emit(this.book.id);
  }

  editBook() {
    this.onClickEdit.emit(this.book.id);
  }

}
