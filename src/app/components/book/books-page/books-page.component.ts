import {Component, ViewChild} from '@angular/core';
import {BookListComponent} from "../book-list/book-list.component";
import {EditBookComponent} from "../edit-book/edit-book.component";
import {ViewBookComponent} from "../view-book/view-book.component";

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent {

  @ViewChild(BookListComponent, {static: false})
  private bookList: BookListComponent | undefined
  @ViewChild(EditBookComponent, {static: false})
  private bookEdit: EditBookComponent | undefined
  @ViewChild(ViewBookComponent, {static: false})
  private bookView: ViewBookComponent | undefined
  showModal = false;
  idModal: number | undefined;

  constructor() {
  }

  openModal() {
    this.showModal = true;
  }

  onClickShow(id: any) {
    this.idModal = id;
    this.openModal();
  }

  onClickEdit(id: any) {
    this.bookEdit?.editBook(id);
  }

  updateList() {
    setTimeout(() => {
      this.bookList?.loadAll();
    }, 250);
  }
}
