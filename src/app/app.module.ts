import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksPageComponent } from './components/book/books-page/books-page.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BookListItemComponent } from './components/book/book-list-item/book-list-item.component';
import { EditBookComponent } from './components/book/edit-book/edit-book.component';
import { ViewBookComponent } from './components/book/view-book/view-book.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        BooksPageComponent,
        BookListComponent,
        BookListItemComponent,
        EditBookComponent,
        ViewBookComponent,
        BooksPageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
