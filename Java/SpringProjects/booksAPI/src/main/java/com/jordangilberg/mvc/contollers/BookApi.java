package com.jordangilberg.mvc.contollers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jordangilberg.mvc.models.Book;
import com.jordangilberg.mvc.services.BookService;

@RestController
public class BookApi {
	 private final BookService bookService;
	 public BookApi(BookService bookService){
	     this.bookService = bookService;
	 }
	 @RequestMapping("/api/books")
	 public List<Book> index() {
	     return bookService.allBooks();
	 }
	 
	 @RequestMapping(value="/api/books/{id}", method=RequestMethod.PUT)
	 public Book update(
	 		@PathVariable("id") Long id, 
	 		@RequestParam(value="title") String title, 
	 		@RequestParam(value="description") String desc, 
	 		@RequestParam(value="language") String lang,
	 		@RequestParam(value="pages") Integer numOfPages) {
	     Book book = bookService.updateBook(id, title, desc, lang, numOfPages);
	     return book;
	 }
	 
	 @RequestMapping("/api/books/{id}")
	 public Book show(@PathVariable("id") Long id) {
	     Book book = bookService.findBook(id);
	     return book;
	 }
}
