import {Component, EventEmitter, Output} from '@angular/core';
import {Book} from "../../../models/book";
import {BooksService} from "../../../services/books.service";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  @Output() onUpdate = new EventEmitter();
  name: string = 'Add Book'
  isNewBook: boolean = true
  book: Book = new Book()
  files: any

  constructor(private service: BooksService) {
  }

  editBook(id: number) {
    this.isNewBook = false;
    this.service.getBook(id).subscribe(value => this.book = value);
  }

  save() {
    this.service.updateBook(this.book);
    this.onUpdate.emit();
  }

  edit() {
    this.service.updateBook(this.book);
    this.clear();
    this.onUpdate.emit();
  }

  submit() {
    if (this.isNewBook)
      this.save()
    else
      this.edit()
  }

  clear(): void {
    this.book = new Book()
    this.isNewBook = true
    this.files = null
  }

  onFileSelected(event: any): void {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = this.handleFile.bind(this)
  }

  handleFile(event: any) {
    this.book.cover = event.target.result;
  }
}
