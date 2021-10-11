package com.jordangilberg.books.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
    
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.jordangilberg.books.models.Book;
import com.jordangilberg.books.services.BookService;
    
@Controller
public class BookController {
    
    private final BookService bookService;
    
    public BookController(BookService bookService) {
    	this.bookService = bookService;
    }
    
    @GetMapping("/home")
    public String toMainPage() {
    	return "redirect:/books";
    }
    
    @GetMapping("/books")
    public String index(HttpSession session, Model model) {
    	if(session.getAttribute("user_id") == null) return "redirect:/";
    	model.addAttribute("userName",session.getAttribute("userName"));
    	model.addAttribute("user_id",session.getAttribute("user_id"));
    	List<Book> books = bookService.allBooks();
        model.addAttribute("books", books);
        return "books.jsp";
    }
    
    @GetMapping("/books/{id}")
    public String showBook(@PathVariable("id") Long id, HttpSession session, Model model){
    	if(session.getAttribute("user_id") == null) return "redirect:/";
    	model.addAttribute("user_id",session.getAttribute("user_id"));
    	Book book = bookService.findBook(id);
    	model.addAttribute("book",book);
    	return "show.jsp";
    }
    
    @GetMapping("/books/edit/{id}")
    public String editBook(@PathVariable("id") Long id, @Valid @ModelAttribute("book") Book book, BindingResult bindingResult,  HttpSession session, Model model){
    	if(session.getAttribute("user_id") == null) return "redirect:/";
    	Book bookValues = bookService.findBook(id);
    	System.out.println(bookValues.getUser().getId());
    	System.out.println(session.getAttribute("user_id"));
    	if( !bookValues.getUser().getId().equals(session.getAttribute("user_id"))) {
    		return "redirect:/books";
    	}else {
        	model.addAttribute("book",bookValues);
        	return "editBook.jsp";
    	}
    }
    
    @GetMapping("/books/new")
    public String newBook(@Valid @ModelAttribute("newBook") Book book, BindingResult bindingResult, HttpSession session, Model model){
    	if(session.getAttribute("user_id") == null) return "redirect:/";
    	model.addAttribute("user_id",session.getAttribute("user_id"));
    	return "newBook.jsp";
    }
    
	 @PostMapping("/books/save")
	 public String saveBook(@Valid @ModelAttribute("newBook") Book book, BindingResult bindingResult , HttpSession session) {
		 if(session.getAttribute("user_id") == null) return "redirect:/";
	       if (bindingResult.hasErrors()) {
	           if(book.getId() != null){
	        	   return "editBook.jsp";
	           }else {
	        	   return "newBook.jsp";
	           }
	       } else {
	       	bookService.saveBook(book);
	           return "redirect:/books";
	       }
	 }
	 
    @GetMapping("/books/delete/{id}")
    public String deleteBook(@PathVariable("id") Long id, HttpSession session, Model model){
    	if(session.getAttribute("user_id") == null) return "redirect:/";
    	Book book = bookService.findBook(id);
    	if(book.getUser().getId() == session.getAttribute("user_id")) {
    		bookService.deleteBook(id);
    		return "redirect:/books";
    	}else {
    		return "redirect:/books";
    	}
    }
}
