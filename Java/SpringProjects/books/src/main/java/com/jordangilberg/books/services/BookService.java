package com.jordangilberg.books.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jordangilberg.books.models.Book;
import com.jordangilberg.books.repositories.BookRepository;
@Service
public class BookService {

    @Autowired
    private BookRepository bookRepo;
	
    public BookService(BookRepository bookRepo) {
    	this.bookRepo = bookRepo;	
    }
    
    public List<Book> allBooks(){
    		return bookRepo.findAll();
    }
    
    public Book findBook(Long id) {
    	Optional<Book> bookFound = bookRepo.findById(id);
    	if(bookFound.isPresent()){
    		return bookFound.get();
    	}else {
    		return null;
    	}
    }
    
    public void deleteBook(Long id) {
    	bookRepo.deleteById(id);
    	System.out.println(String.format("Book was deleted: %d", id));
    }
    
    public Book saveBook(Book book) {
    	bookRepo.save(book);
    	return book;
    }
}
