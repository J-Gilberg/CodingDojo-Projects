package com.jordangilberg.dojosAndNinjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.jordangilberg.dojosAndNinjas.models.Dojo;
import com.jordangilberg.dojosAndNinjas.models.Ninja;
import com.jordangilberg.dojosAndNinjas.repositories.NinjaRepository;

@Service
public class NinjaService {
    private final NinjaRepository ninjaRepository;
    
    public NinjaService(NinjaRepository ninjaRepository) {
        this.ninjaRepository = ninjaRepository;
    }
    public List<Ninja> allNinjas() {
        return ninjaRepository.findAll();
    }
    public Ninja findNinja(Long id) {
        Optional<Ninja> optionalNinja = ninjaRepository.findById(id);
        if(optionalNinja.isPresent()) {
            return optionalNinja.get();
        } else {
            return null;
        }
    }
    
    public void deleteNinja(Long id) {
    	ninjaRepository.deleteById(id);
    	System.out.println(String.format("Ninja was deleted: %d", id));
    }
    
    public Ninja updateNinja(Long id, Ninja ninja) {
    	ninja.setId(id);
    	ninjaRepository.save(ninja);
    	return ninja;
    }
    
    public void addNinja(String firstName,String lastName, int age, Dojo dojo) {
    	Ninja tempNinja = new Ninja(firstName,lastName,age,dojo);
    	ninjaRepository.save(tempNinja);
    }
    
    public void addNinja(Ninja ninja) {
    	ninjaRepository.save(ninja);
    }
}