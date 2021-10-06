package com.jordangilberg.pokeBook.services;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.jordangilberg.pokeBook.models.Expense;
import com.jordangilberg.pokeBook.repositories.ExpenseRepository;

@Service
public class ExpenseService {
    private final ExpenseRepository expenseRepository;
    
    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }
    public List<Expense> allExpenses() {
        return expenseRepository.findAll();
    }
    public Expense findExpense(Long id) {
        Optional<Expense> optionalExpense = expenseRepository.findById(id);
        if(optionalExpense.isPresent()) {
            return optionalExpense.get();
        } else {
            return null;
        }
    }
    
    public void deleteExpense(Long id) {
    	expenseRepository.deleteById(id);
    	System.out.println(String.format("Expense was deleted: %d", id));
    }
    
    public Expense updateExpense(long id, Expense expense) {
    	expense.setId(id);
    	expenseRepository.save(expense);
    	return expense;
    }
    
    public void addExpense(String title, String desc, String vendor, BigDecimal amount) {
    	Expense tempExpense = new Expense(title, desc, vendor, amount);
    	expenseRepository.save(tempExpense);
    }
    
    public void addExpense(Expense expense) {
    	expenseRepository.save(expense);
    }
}
