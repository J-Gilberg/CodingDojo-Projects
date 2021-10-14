package com.jordangilberg.hopper;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReceiptController {

    @RequestMapping("/")
    public String index(Model model) {
        
        String name = "Jordan Gilberg";
        String itemName = "Somthing kinda cool";
        double price = 100000;
        String description = "Rock on!";
        String vendor = "Gilberg Furniture";
    
    	model.addAttribute("name", name);
    	model.addAttribute("price", price);
    	model.addAttribute("vendor", vendor);
    	model.addAttribute("desc", description);
    	model.addAttribute("itemName", itemName);
    	
    
        return "index.jsp";
    }
}
