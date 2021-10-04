package com.jordangilberg.counter.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class counterController {
    @RequestMapping("/")
    public String index(HttpSession session, Model model) {
    	if(session.getAttribute("count") == null) {
    		session.setAttribute("count", 0);
    	}
        session.setAttribute("count", (Integer) session.getAttribute("count") + 1 );
        Integer count = (Integer) session.getAttribute("count");
        model.addAttribute("countToShow", count);
        
        return "index.jsp";
    }

}
