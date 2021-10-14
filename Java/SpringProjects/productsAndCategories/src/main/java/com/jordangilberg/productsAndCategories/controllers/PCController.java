package com.jordangilberg.productsAndCategories.controllers;

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

import com.jordangilberg.productsAndCategories.models.Product;
import com.jordangilberg.productsAndCategories.services.ProductService;
    
@Controller
public class PCController {
    
    private final ProductService productService;
    
    public PCController(ProductService productService) {
    	this.productService = productService;
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
    	List<Product> products = productService.allProducts();
        model.addAttribute("products", products);
        return "books.jsp";
    }
    
    @GetMapping("/books/{id}")
    public String showProduct(@PathVariable("id") Long id, HttpSession session, Model model){
    	if(session.getAttribute("user_id") == null) return "redirect:/";
    	model.addAttribute("user_id",session.getAttribute("user_id"));
    	Product product = productService.findProduct(id);
    	model.addAttribute("product",product);
    	return "show.jsp";
    }
    
    @GetMapping("/books/edit/{id}")
    public String editProduct(@PathVariable("id") Long id, @Valid @ModelAttribute("book") Product product, BindingResult bindingResult,  HttpSession session, Model model){
    	if(session.getAttribute("user_id") == null) return "redirect:/";
    	Product productValues = productService.findProduct(id);
    	System.out.println(productValues.getUser().getId());
    	System.out.println(session.getAttribute("user_id"));
    	if( !productValues.getUser().getId().equals(session.getAttribute("user_id"))) {
    		return "redirect:/books";
    	}else {
        	model.addAttribute("product",productValues);
        	return "editProduct.jsp";
    	}
    }
    
    @GetMapping("/books/new")
    public String newProduct(@Valid @ModelAttribute("newProduct") Product product, BindingResult bindingResult, HttpSession session, Model model){
    	if(session.getAttribute("user_id") == null) return "redirect:/";
    	model.addAttribute("user_id",session.getAttribute("user_id"));
    	return "newProduct.jsp";
    }
    
	 @PostMapping("/books/save")
	 public String saveProduct(@Valid @ModelAttribute("newProduct") Product product, BindingResult bindingResult , HttpSession session) {
		 if(session.getAttribute("user_id") == null) return "redirect:/";
	       if (bindingResult.hasErrors()) {
	           if(product.getId() != null){
	        	   return "editProduct.jsp";
	           }else {
	        	   return "newProduct.jsp";
	           }
	       } else {
	       	productService.saveProduct(product);
	           return "redirect:/books";
	       }
	 }
	 
    @GetMapping("/books/delete/{id}")
    public String deleteProduct(@PathVariable("id") Long id, HttpSession session, Model model){
    	if(session.getAttribute("user_id") == null) return "redirect:/";
    	Product product = productService.findProduct(id);
    	if(product.getUser().getId() == session.getAttribute("user_id")) {
    		productService.deleteProduct(id);
    		return "redirect:/books";
    	}else {
    		return "redirect:/books";
    	}
    }
}
