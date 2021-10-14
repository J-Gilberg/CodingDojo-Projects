package com.jordangilberg.productsAndCategories.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.jordangilberg.productsAndCategories.models.Product;

public interface ProductRepository extends CrudRepository<Product, Long>{
	List<Product> findAll();
}
