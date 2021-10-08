package com.jordangilberg.dojosAndNinjas.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jordangilberg.dojosAndNinjas.models.Dojo;

@Repository
public interface DojoRepository extends CrudRepository<Dojo, Long>{
    // this method retrieves all the books from the database
    List<Dojo> findAll();
//    // this method finds books with descriptions containing the search string
//    List<Expense> findByDescriptionContaining(String search);
//    // this method counts how many titles contain a certain string
//    Long countByDojoContaining(Long search);
////    // this method deletes a book that starts with a specific value
////    Long deleteByValueStartingWith(String search);
}
