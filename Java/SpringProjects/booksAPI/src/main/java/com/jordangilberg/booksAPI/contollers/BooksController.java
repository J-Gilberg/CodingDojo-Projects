package com.jordangilberg.booksAPI.contollers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.jordangilberg.booksAPI.models.Book;
import com.jordangilberg.booksAPI.services.BookService;

@Controller
@RequestMapping("/books")
public class BooksController {
	
	private final BookService bookService;
	 
	public BooksController(BookService bookService){
	    this.bookService = bookService;
	}
	 
	@GetMapping("/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		Book book = bookService.findBook(id);
		model.addAttribute("book", book);
		return "show.jsp";
	}
	
	@GetMapping("")
	public String show(Model model) {
		List<Book> books = bookService.allBooks();
		model.addAttribute("books", books);
		return "index.jsp";
	}
}
