/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.qd.service;

import com.qd.dto.AuthResponse;
import com.qd.dto.RegisterRequest;
import com.qd.dto.UserProfile;

/**
 *
 * @author ADMIN
 */
public interface UserService {
    AuthResponse register(RegisterRequest req);
    AuthResponse login(String username,String password);
    UserProfile getUserProfile(String username);

}
