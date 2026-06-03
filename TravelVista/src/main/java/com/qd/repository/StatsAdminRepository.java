/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.qd.repository;

import java.util.Date;

/**
 *
 * @author ADMIN
 */
public interface StatsAdminRepository {
    long countActiveServices(String serviceType);
    long countOrderFrequency(Date from, Date to, String serviceType);
    double calculateTotalRevenue(Date from, Date to, String serviceType);
    long countTotalProviders();
    long countTotalCustomers();

}
