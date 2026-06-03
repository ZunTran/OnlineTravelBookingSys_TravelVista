package com.qd.controllers.admin;

import com.qd.annotation.RequireAdmin;
import com.qd.service.StatsService;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/stats")
@CrossOrigin(origins = "*", allowedHeaders = "*")
// @RequireAdmin 
public class AdminStatsController {

    @Autowired
    private StatsService statsService;

    @GetMapping("")
    public ResponseEntity<Map<String, Object>> getStats(@RequestParam Map<String, String> params) {
        Map<String, Object> statsData = statsService.getAdminDashboardStats(params);
                return ResponseEntity.ok(Map.of("success", true, "data", statsData));
    }
}