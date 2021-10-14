package com.jordangilberg.productsAndCategories.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jordangilberg.productsAndCategories.models.Category;
import com.jordangilberg.productsAndCategories.repositories.CategoryRepository;
@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepo;
	
    public CategoryService(CategoryRepository categoryRepo) {
    	this.categoryRepo = categoryRepo;	
    }
    
    public List<Category> allCategorys(){
    		return categoryRepo.findAll();
    }
    
    public Category findCategory(Long id) {
    	Optional<Category> categoryFound = categoryRepo.findById(id);
    	if(categoryFound.isPresent()){
    		return categoryFound.get();
    	}else {
    		return null;
    	}
    }
    
    public void deleteCategory(Long id) {
    	categoryRepo.deleteById(id);
    	System.out.println(String.format("Category was deleted: %d", id));
    }
    
    public Category saveCategory(Category category) {
    	categoryRepo.save(category);
    	return category;
    }

}
