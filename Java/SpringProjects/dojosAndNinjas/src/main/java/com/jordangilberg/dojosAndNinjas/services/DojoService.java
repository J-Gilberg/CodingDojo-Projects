package com.jordangilberg.dojosAndNinjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.jordangilberg.dojosAndNinjas.models.Dojo;
import com.jordangilberg.dojosAndNinjas.repositories.DojoRepository;

@Service
public class DojoService {
    private final DojoRepository dojoRepository;
    
    public DojoService(DojoRepository dojoRepository) {
        this.dojoRepository = dojoRepository;
    }
    public List<Dojo> allDojos() {
        return dojoRepository.findAll();
    }
    public Dojo findDojo(Long id) {
        Optional<Dojo> optionalDojo = dojoRepository.findById(id);
        if(optionalDojo.isPresent()) {
            return optionalDojo.get();
        } else {
            return null;
        }
    }
    
    public void deleteDojo(Long id) {
    	dojoRepository.deleteById(id);
    	System.out.println(String.format("Dojo was deleted: %d", id));
    }
    
    public Dojo updateDojo(Long id, Dojo dojo) {
    	dojo.setId(id);
    	dojoRepository.save(dojo);
    	return dojo;
    }
    
    public void addDojo(Dojo dojo) {
    	dojoRepository.save(dojo);
    }
}
