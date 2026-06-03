/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.qd.service.impl;

import com.qd.repository.StatsAdminRepository;
import com.qd.service.StatsService;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ADMIN
 */
@Service
public class StatsServiceImpl implements StatsService{
    @Autowired
    private StatsAdminRepository statsRepo;
    
    private final SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");

   @Override
public Map<String, Object> getAdminDashboardStats(Map<String, String> params) {
    String serviceType = params != null ? params.get("serviceType") : null;
    Date fromDate = null;
    Date toDate = null;

    try {
        if (params != null && params.get("fromDate") != null && !params.get("fromDate").isEmpty()) {
            fromDate = df.parse(params.get("fromDate"));
        }
        if (params != null && params.get("toDate") != null && !params.get("toDate").isEmpty()) {
            toDate = df.parse(params.get("toDate"));
        }
    } catch (Exception e) {
    }
    long activeServices = statsRepo.countActiveServices(serviceType);
    long orderFreq = statsRepo.countOrderFrequency(fromDate, toDate, serviceType);
    double totalRev = statsRepo.calculateTotalRevenue(fromDate, toDate, serviceType);

    long totalProviders = statsRepo.countTotalProviders();
    long totalCustomers = statsRepo.countTotalCustomers();

    Map<String, Object> stats = new HashMap<>();
    stats.put("activeServices", activeServices);
    stats.put("orderFrequency", orderFreq);
    stats.put("totalRevenue", totalRev);
        stats.put("totalProviders", totalProviders);
    stats.put("totalCustomers", totalCustomers);

    return stats;
}
}
