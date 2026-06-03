package com.qd.controllers.admin;

import com.qd.service.CategoryService;
import com.qd.service.UserService;

import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/admin")
public class AdminViewController {

    @Autowired
    private CategoryService categoryService;


    @GetMapping("/login")
    public String loginPage() { return "admin/login"; }

    @GetMapping("/dashboard")
    public String dashboardPage() { return "admin/dashboard"; }

    @GetMapping("/categories")
    public String categoriesPage(Model model) {
        model.addAttribute("categoriesList", categoryService.getCates(new HashMap<>()));
        return "admin/categories";
    }

   @GetMapping("/providers")
    public String prov() { 
        return "admin/providers"; 
    }

}
