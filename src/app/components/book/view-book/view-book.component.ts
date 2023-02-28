import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BooksService} from "../../../services/books.service";
import {BookDetail} from "../../../models/bookDetail";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>();
  @Input() id: number | undefined;

  book!: BookDetail;

  constructor(private service: BooksService) {
  }

  ngOnInit(): void {
    this.service.getBookDetail(this.id!).subscribe(value => {
      this.book = value;
      console.log(this.book)
    })
  }

  onClose() {
    this.closeModal.emit();
  }
}
