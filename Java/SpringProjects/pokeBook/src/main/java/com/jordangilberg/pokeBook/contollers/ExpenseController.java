package com.jordangilberg.pokeBook.contollers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.jordangilberg.pokeBook.models.Expense;
import com.jordangilberg.pokeBook.services.ExpenseService;

@Controller
@RequestMapping("/expenses")
public class ExpenseController {
	
	private final ExpenseService expenseService;
	 
	public ExpenseController(ExpenseService expenseService){
	    this.expenseService = expenseService;
	}
	
	@GetMapping("")
	public String show(Model model) {
		List<Expense> expenses = expenseService.allExpenses();
		Expense expense = new Expense();
		model.addAttribute("expenses", expenses);
		model.addAttribute("expense", expense);
		return "index.jsp";
	}
	 
	@GetMapping("/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		Expense expense = expenseService.findExpense(id);
		model.addAttribute("expense", expense);
		return "show.jsp";
	}
	
	@GetMapping("/edit/{id}")
	public String edit(@PathVariable("id") Long id, Model model) {
		System.out.println(expenseService.findExpense(id));
		Expense expense = expenseService.findExpense(id);
		model.addAttribute("expense", expense);
		return "edit.jsp";
	}
	
	 
	 @PostMapping("/update/{id}")
	 public String update(@PathVariable("id") Long id, @Valid @ModelAttribute("expense") Expense expense, BindingResult bindingResult, Model model) {
	        if (bindingResult.hasErrors()) {
	            return "redirect:/edit/"+id;
	        } else {
	        	expenseService.updateExpense(id, expense);
	            return "redirect:/expenses";
	        }
	 }
	
	
	 @PostMapping("/new")
	 public String newExpense(@Valid @ModelAttribute("expense") Expense expense, BindingResult bindingResult, Model model) {
        if (bindingResult.hasErrors()) {
    		List<Expense> expenses = expenseService.allExpenses();
    		model.addAttribute("expenses", expenses);
            return "index.jsp";
        } else {
        	expenseService.addExpense(expense);
            return "redirect:/expenses";
        }
	 }

	 @GetMapping(value="/delete/{id}")
	 public String delete(@PathVariable("id") Long id, Model model) {
		expenseService.deleteExpense(id);
 		return "redirect:/expenses";
	 }
	 
}
