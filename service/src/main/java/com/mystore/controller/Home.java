package com.mystore.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class Home {

    @RequestMapping({"/", "/login"})
    public String home() {
        return "login";
    }

    @GetMapping({"/home", "/index"})
    public String wlcome(@RequestParam(name = "userName", required = false, defaultValue = "World") String name, Model model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        boolean hasUserRole = authentication.getAuthorities().stream().anyMatch(r -> r.getAuthority().equals("user"));
        System.out.println("userName " + currentPrincipalName);
        model.addAttribute("userName", currentPrincipalName);
        return "index";
    }

}
