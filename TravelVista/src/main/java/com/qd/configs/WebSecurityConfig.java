package com.qd.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            //Tắt CSRF để các công cụ test API (Swagger, Postman) gửi request thoải mái
            .csrf(csrf -> csrf.disable())
            
            // Cấu hình phân quyền 
        .authorizeHttpRequests(auth -> auth
        .requestMatchers("/api/services/**").permitAll()
        .requestMatchers("/api/auth/**").permitAll()
        
        .requestMatchers("/api/admin/**").hasRole("ADMIN")
        .requestMatchers("/api/provider/**").hasRole("PROVIDER")
        .requestMatchers("/api/cart/**", "/api/orders/**").hasRole("CUSTOMER")
                    
        .anyRequest().authenticated()
            );

        return http.build();
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}