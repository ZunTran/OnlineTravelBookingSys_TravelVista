package com.qd.repository.impl;

import com.qd.enums.PaymentStatus;
import com.qd.enums.ServiceStatus;
import com.qd.pojo.Categories;
import com.qd.pojo.Orders;
import com.qd.pojo.Services;
import com.qd.pojo.Users; 
import com.qd.repository.StatsAdminRepository;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.query.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author ADMIN
 */
@Repository
@Transactional
public class StatsAdminRepositoryImpl implements StatsAdminRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Override
    public long countActiveServices(String serviceType) {
        Session s = this.factory.getObject().getCurrentSession();
        CriteriaBuilder b = s.getCriteriaBuilder();
        CriteriaQuery<Long> q = b.createQuery(Long.class);
        
        Root<Services> root = q.from(Services.class);
        q.select(b.count(root.get("id")));

        List<Predicate> predicates = new ArrayList<>();
        // Khớp lệnh POJO: Trường status bằng Enum ServiceStatus.ACTIVATE
        predicates.add(b.equal(root.get("status"), ServiceStatus.ACTIVATE));

        // Khớp lệnh POJO: Lọc theo trường serviceType (Kiểu Enum ServiceType)
        if (serviceType != null && !serviceType.isEmpty()) {
            try {
                // Ép chuỗi String thành kiểu Enum tương ứng (TOUR, HOTEL, TRANSPORT)
                com.qd.enums.ServiceType typeEnum = com.qd.enums.ServiceType.valueOf(serviceType.toUpperCase());
                predicates.add(b.equal(root.get("serviceType"), typeEnum));
            } catch (IllegalArgumentException e) {
                // Nếu truyền chuỗi bậy bạ không có trong Enum thì bỏ qua bộ lọc này
            }
        }

        q.where(predicates.toArray(Predicate[]::new));
        Query<Long> query = s.createQuery(q);
        
        Long res = query.getSingleResult();
        return res != null ? res : 0L;
    }

    @Override
public long countOrderFrequency(Date from, Date to, String serviceType) {
    Session s = this.factory.getObject().getCurrentSession();
    CriteriaBuilder b = s.getCriteriaBuilder();
    CriteriaQuery<Long> q = b.createQuery(Long.class);
    
    Root<Orders> root = q.from(Orders.class);
    q.select(b.count(root.get("id")));

    List<Predicate> predicates = new ArrayList<>();
    predicates.add(b.equal(root.get("paymentStatus"), PaymentStatus.PAY));

    if (from != null) predicates.add(b.greaterThanOrEqualTo(root.get("createdAt"), from));
    if (to != null) predicates.add(b.lessThanOrEqualTo(root.get("createdAt"), to));

    if (serviceType != null && !serviceType.isEmpty()) {
        Join<Orders, com.qd.pojo.OrderDetails> odJoin = root.join("orderDetailsSet");
        Join<com.qd.pojo.OrderDetails, com.qd.pojo.SellableItems> siJoin = odJoin.join("itemId");
        Join<com.qd.pojo.SellableItems, Services> sJoin = siJoin.join("serviceId");
        
        com.qd.enums.ServiceType typeEnum = com.qd.enums.ServiceType.valueOf(serviceType.toUpperCase());
        predicates.add(b.equal(sJoin.get("serviceType"), typeEnum));
    }

    q.where(predicates.toArray(Predicate[]::new));
    return s.createQuery(q).getSingleResult();
}

@Override
public double calculateTotalRevenue(Date from, Date to, String serviceType) {
    Session s = this.factory.getObject().getCurrentSession();
    CriteriaBuilder b = s.getCriteriaBuilder();
    CriteriaQuery<BigDecimal> q = b.createQuery(BigDecimal.class);
    
    Root<Orders> root = q.from(Orders.class);
    q.select(b.sum(root.get("totalAmount")));

    List<Predicate> predicates = new ArrayList<>();
    predicates.add(b.equal(root.get("paymentStatus"), PaymentStatus.PAY));

    if (from != null) predicates.add(b.greaterThanOrEqualTo(root.get("createdAt"), from));
    if (to != null) predicates.add(b.lessThanOrEqualTo(root.get("createdAt"), to));

    if (serviceType != null && !serviceType.isEmpty()) {
        Join<Orders, com.qd.pojo.OrderDetails> odJoin = root.join("orderDetailsSet");
        Join<com.qd.pojo.OrderDetails, com.qd.pojo.SellableItems> siJoin = odJoin.join("itemId");
        Join<com.qd.pojo.SellableItems, Services> sJoin = siJoin.join("serviceId");
        
        com.qd.enums.ServiceType typeEnum = com.qd.enums.ServiceType.valueOf(serviceType.toUpperCase());
        predicates.add(b.equal(sJoin.get("serviceType"), typeEnum));
    }

    q.where(predicates.toArray(Predicate[]::new));
    BigDecimal res = s.createQuery(q).getSingleResult();
    return res != null ? res.doubleValue() : 0.0;
}
    @Override
    public long countTotalProviders() {
        Session s = this.factory.getObject().getCurrentSession();
        String sql = "SELECT COUNT(*) FROM users WHERE role_id = 3";
        
        Long res = s.createNativeQuery(sql, Long.class).getSingleResult();
        return res != null ? res : 0L;
    }

    @Override
    public long countTotalCustomers() {
        Session s = this.factory.getObject().getCurrentSession();
        String sql = "SELECT COUNT(*) FROM users WHERE role_id = 2";
        
        Long res = s.createNativeQuery(sql, Long.class).getSingleResult();
        return res != null ? res : 0L;
    }


}