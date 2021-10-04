package com.jordangilberg.daikichi;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class DaikichiController {
	@RequestMapping("/today")
	public String Today() {
		return "Today you will find luck in all your endeavors";
	}
	
	@RequestMapping("")
	public String Welcome() {
		return "Welcome";
	}
	
	@RequestMapping("/tomorrow")
	public String Tomorrow() {
		return "Tomorrow, an opportunity will arise so be sure to be open to new ideas";
	}
}
