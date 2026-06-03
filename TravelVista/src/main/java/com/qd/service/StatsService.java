/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.qd.service;

import java.util.Map;

/**
 *
 * @author ADMIN
 */
public interface StatsService {
    Map<String, Object> getAdminDashboardStats(Map<String, String> params);
}
