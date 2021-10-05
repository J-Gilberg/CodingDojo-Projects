package com.jordangilberg.mvc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.jordangilberg.mvc.models.Book;
import com.jordangilberg.mvc.repositories.BookRepository;

@Service
public class BookService {
    // adding the book repository as a dependency
    private final BookRepository bookRepository;
    
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    // returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
    
    public void deleteBook(Long id) {
    	bookRepository.deleteById(id);
    	System.out.println(String.format("Book was deleted: %d", id));
    }
    
    public Book updateBook(long id, String title, String desc, String lang, Integer numOfPages) {
    	Book tempBook = new Book(title, desc, lang, numOfPages);
    	tempBook.setId(id);
    	bookRepository.save(tempBook);
    	return tempBook;
    }
}
