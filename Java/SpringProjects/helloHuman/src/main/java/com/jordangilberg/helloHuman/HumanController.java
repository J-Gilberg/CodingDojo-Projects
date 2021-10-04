package com.jordangilberg.helloHuman;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HumanController {

//	@RequestMapping("/")
//	public String welcome() {
//		return "Hello Human";
//	}
	
	@RequestMapping("/single")
	public String Name(@RequestParam(value="name", required=false) String name) {
		return "Hello " + name;
	}
	
	@RequestMapping("/full")
	public String FullName(@RequestParam String firstName, @RequestParam String lastName) {
		return String.format("Hello %s %s",firstName, lastName);
	}
//	
	@RequestMapping("/repeat")
	public String Repeat(@RequestParam String firstName, @RequestParam String times) {
		return String.format("Hello %s",firstName).repeat(Integer.parseInt(times));
	}
	
}
