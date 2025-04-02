package com.book_backend.book;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.book_backend.book.controller.BookController;

@SpringBootTest
class BookApplicationTests {

    @Autowired
    private BookController bookController;

    @Test
    void contextLoads() {
        assertThat(bookController).isNotNull();
    }
}
