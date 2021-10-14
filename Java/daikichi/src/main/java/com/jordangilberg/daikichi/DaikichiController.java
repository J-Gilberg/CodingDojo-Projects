package com.jordangilberg.daikichi;


import org.springframework.web.bind.annotation.PathVariable;
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
	
	@RequestMapping("/travel/{destination}")
	public String travel(@PathVariable("destination") String destination) {
		return "Congratulations! You will soon travel to " + destination;
	}
	
	@RequestMapping("/lotto/{luckyNumber}")
	public String lotto(@PathVariable("luckyNumber") String luckyNumber) {
		if(Integer.parseInt(luckyNumber)%2 == 0) {
			return "You will take a grand journey in the near future, but be weary of tempting offers.";
		}
		return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";
	}
}
 