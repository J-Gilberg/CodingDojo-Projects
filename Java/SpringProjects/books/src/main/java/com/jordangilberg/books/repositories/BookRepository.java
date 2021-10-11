package com.jordangilberg.books.repositories;

import java.util.List;

import com.jordangilberg.books.models.Book;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Long>{
	List<Book> findAll();
}
