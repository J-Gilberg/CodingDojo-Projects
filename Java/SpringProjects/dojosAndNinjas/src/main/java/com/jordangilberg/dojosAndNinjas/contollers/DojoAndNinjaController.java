package com.jordangilberg.dojosAndNinjas.contollers;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.jordangilberg.dojosAndNinjas.models.Dojo;
import com.jordangilberg.dojosAndNinjas.models.Ninja;
import com.jordangilberg.dojosAndNinjas.services.DojoService;
import com.jordangilberg.dojosAndNinjas.services.NinjaService;

@Controller
@RequestMapping("/dojos")
public class DojoAndNinjaController {
	
	private final DojoService dojoService;
	private final NinjaService ninjaService;
	 
	public DojoAndNinjaController(DojoService dojoService, NinjaService ninjaService){
	    this.dojoService = dojoService;
	    this.ninjaService = ninjaService;
	}
	
	@GetMapping("")
	public String show(Model model) {
		List<Dojo> dojos = dojoService.allDojos();
		model.addAttribute("dojos", dojos);
		return "index.jsp";
	}
	 
	@GetMapping("/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		Dojo dojo = dojoService.findDojo(id);
		model.addAttribute("dojo", dojo);
		List<Ninja> tempNinjas = ninjaService.allNinjas();
		ArrayList<Ninja> ninjas = new ArrayList<Ninja>();
		for(int i = 0; i < tempNinjas.size();++i) {
			if(tempNinjas.get(i).getDojo().getId() == id) {
				ninjas.add(tempNinjas.get(i));
			}
		}
		model.addAttribute("ninjas", ninjas);
		return "dojo.jsp";
	}
	
//	@GetMapping("/edit/{id}")
//	public String edit(@PathVariable("id") Long id, Model model) {
//		System.out.println(dojoService.findDojo(id));
//		Dojo dojo = dojoService.findDojo(id);
//		model.addAttribute("dojo", dojo);
//		return "edit.jsp";
//	}
	
	 
//	 @PostMapping("/update/{id}")
//	 public String update(@PathVariable("id") Long id, @Valid @ModelAttribute("dojo") Dojo dojo, BindingResult bindingResult, Model model) {
//	        if (bindingResult.hasErrors()) {
//	            return "redirect:/edit/"+id;
//	        } else {
//	        	dojoService.updateDojo(id, dojo);
//	            return "redirect:/dojos";
//	        }
//	 }
	 
	@GetMapping("/new")
	public String newDojo(Model model) {
		Dojo dojo = new Dojo();
		model.addAttribute(dojo);
		return "newDojo.jsp";
	}
	
	@GetMapping("/ninjas/new")
	public String newNinja(Model model) {
		Ninja ninja = new Ninja();
		List<Dojo> dojos = dojoService.allDojos();
		System.out.println(dojos.get(0).getName());
		model.addAttribute("ninja",ninja);
		model.addAttribute("dojos", dojos);
		return "newNinja.jsp";
	}
	
	
	 @PostMapping("/save")
	 public String saveDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return "redirect:/dojos/new";
        } else {
        	dojoService.addDojo(dojo);
            return "redirect:/dojos";
        }
	 }
	 
	 @PostMapping("/ninjas/save")
	 public String saveNinja(@Valid @ModelAttribute("dojo") Ninja ninja, BindingResult bindingResult, Model model) {
        if (bindingResult.hasErrors()) {
    		List<Dojo> dojos = dojoService.allDojos();
    		model.addAttribute("dojos", dojos);
            return "newNinja.jsp";
        } else {
        	ninjaService.addNinja(ninja);
            return "redirect:/dojos";
        }
	 }

//	 @GetMapping(value="/delete/{id}")
//	 public String delete(@PathVariable("id") Long id, Model model) {
//		dojoService.deleteDojo(id);
// 		return "redirect:/dojos";
//	 }
	 
}
