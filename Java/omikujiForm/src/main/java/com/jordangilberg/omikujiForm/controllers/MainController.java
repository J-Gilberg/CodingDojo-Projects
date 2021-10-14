package com.jordangilberg.omikujiForm.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
	
	public String message; 
	
	@GetMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@PostMapping("/sendData")
	public String data(
			@RequestParam(value="number") String number
		    ,@RequestParam(value="city") String city
		    ,@RequestParam(value="person") String person
		    ,@RequestParam(value="hobby") String hobby
		    ,@RequestParam(value="thing") String thing
		    ,@RequestParam(value="quote") String quote
		) {
	    message = String.format("In %s years, you will live in %s with %s as your roommate, %s for living. The next time you see a %s, you will have good luck. Also, %s.",number,city,person,hobby,thing,quote);
	    return "redirect:/show";
	}
	
	@GetMapping("/show")
	public String show(Model model) {
		model.addAttribute("message", message);
		return "show.jsp";
	}
}

