package com.jordangilberg.pokeBook.contollers;

import java.math.BigDecimal;
import java.util.List;

import javax.validation.Valid;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jordangilberg.pokeBook.models.Expense;
import com.jordangilberg.pokeBook.services.ExpenseService;

@RestController
public class PokeBook {
	 private final ExpenseService expenseService;
	 public PokeBook(ExpenseService expenseService){
	     this.expenseService = expenseService;
	 }


	 
	 @RequestMapping("/api/expenses/{id}")
	 public Expense show(@PathVariable("id") Long id) {
	     Expense expense = expenseService.findExpense(id);
	     return expense;
	 }
	 

	 
}
