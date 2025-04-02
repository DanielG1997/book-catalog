package com.book_backend.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book_backend.book.model.Book;
public interface BookRepository extends JpaRepository<Book, Long> {
}
