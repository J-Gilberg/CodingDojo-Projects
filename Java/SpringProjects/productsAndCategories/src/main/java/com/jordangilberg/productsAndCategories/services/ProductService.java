package com.jordangilberg.productsAndCategories.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jordangilberg.productsAndCategories.models.Product;
import com.jordangilberg.productsAndCategories.repositories.ProductRepository;
@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepo;
	
    public ProductService(ProductRepository productRepo) {
    	this.productRepo = productRepo;	
    }
    
    public List<Product> allProducts(){
    		return productRepo.findAll();
    }
    
    public Product findProduct(Long id) {
    	Optional<Product> productFound = productRepo.findById(id);
    	if(productFound.isPresent()){
    		return productFound.get();
    	}else {
    		return null;
    	}
    }
    
    public void deleteProduct(Long id) {
    	productRepo.deleteById(id);
    	System.out.println(String.format("Product was deleted: %d", id));
    }
    
    public Product saveProduct(Product product) {
    	productRepo.save(product);
    	return product;
    }
}
