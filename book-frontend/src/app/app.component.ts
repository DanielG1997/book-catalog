import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';
import { Book } from './book';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  books: Book[] = [];
  newBook: Book = { title: '', author: '', publicationYear: 0 };

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe({
      next: (data) => this.books = data,
      error: (err) => console.error('Erro ao carregar livros:', err)
    });
  }

  addBook() {
    if (!this.newBook.title || !this.newBook.author || this.newBook.publicationYear <= 0) {
      console.warn('Por favor, preencha todos os campos corretamente.');
      return;
    }

    this.bookService.addBook(this.newBook).subscribe({
      next: () => {
        this.loadBooks();
        this.newBook = { title: '', author: '', publicationYear: 0 };
      },
      error: (err) => console.error('Erro ao adicionar livro:', err)
    });
  }
}

// ✅ Inicializando corretamente o Angular
bootstrapApplication(AppComponent, {
  providers: [BookService]
}).catch(err => console.error(err));
