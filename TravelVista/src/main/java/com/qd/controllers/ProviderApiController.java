/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.qd.controllers;

import com.qd.dto.provider.BaseComprehensiveRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.qd.service.UserService;
import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ADMIN
 */
@RestController
@RequestMapping("/api/provider/services")
public class ProviderApiController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<Map<String, Object>> getMyServices(
            Principal principal,
            @RequestParam Map<String, String> params) {
        
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("data", userService.getMyServicesList(principal.getName(), params));
        
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}/{serviceType}")
    public ResponseEntity<Map<String, Object>> getMyServiceDetail(
            java.security.Principal principal, 
            @PathVariable("id") Long id,
            @PathVariable("serviceType") String serviceType) {
        
        String cleanType = serviceType.toUpperCase();
        if (cleanType.contains("TOUR")) {
            cleanType = "TOUR";
        } else if (cleanType.contains("HOTEL")) {
            cleanType = "HOTEL";
        } else if (cleanType.contains("TRANSPORT") || cleanType.contains("XE")) {
            cleanType = "TRANSPORT";
        }
        
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("data", userService.getMyServiceDetail(principal.getName(), id, cleanType));
        
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> saveComprehensiveService(
            Principal principal,@RequestBody BaseComprehensiveRequest req) { 
        
        Long serviceId = userService.saveComprehensiveServiceInOneGo(principal.getName(), req);
        
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Đã lưu thông tin thành công!");
        response.put("serviceId", serviceId);
        return ResponseEntity.ok(response);
    }
}