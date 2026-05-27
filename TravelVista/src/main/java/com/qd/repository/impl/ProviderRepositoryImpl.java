/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.qd.repository.impl;

import com.qd.pojo.Providers;
import com.qd.pojo.Users;
import com.qd.repository.ProviderRepository;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import java.util.List;
import java.util.Map;
import java.util.ServiceLoader;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author ADMIN
 */
@Repository
@PropertySource("classpath:configs.properties")
@Transactional
public class ProviderRepositoryImpl implements ProviderRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Autowired
    private Environment env;

    @Override
    public boolean isExistsByCompanyName(String companyName) {
        Session session = this.factory.getObject().getCurrentSession();
        CriteriaBuilder b = session.getCriteriaBuilder();
        CriteriaQuery<Long> q = b.createQuery(Long.class);
        Root<Providers> root = q.from(Providers.class);
        q.select(b.count(root)).where(b.equal(root.get("companyName"), companyName));
        Long count = session.createQuery(q).uniqueResult();
        return count > 0;
    }

    @Override
    public boolean isExistsByTaxCode(String taxCode) {
        Session session = this.factory.getObject().getCurrentSession();
        CriteriaBuilder b = session.getCriteriaBuilder();
        CriteriaQuery<Long> q = b.createQuery(Long.class);
        Root<Providers> root = q.from(Providers.class);
        q.select(b.count(root)).where(b.equal(root.get("taxCode"), taxCode));
        Long count = session.createQuery(q).uniqueResult();
        return count > 0;
    }

    @Override
    public void save(Providers provider) {
        Session session = this.factory.getObject().getCurrentSession();
        session.merge(provider);
    }

    @Override
    public boolean isExistsByHotline(String hotline) {
        Session session = this.factory.getObject().getCurrentSession();
        CriteriaBuilder b = session.getCriteriaBuilder();
        CriteriaQuery<Long> q = b.createQuery(Long.class);
        Root<Providers> root = q.from(Providers.class);
        q.select(b.count(root)).where(b.equal(root.get("hotline"), hotline));
        Long count = session.createQuery(q).uniqueResult();
        return count > 0;
    }

    @Override
    public List<Providers> getProvidersByStatus(boolean isApproved, Map<String, String> params) {
        Session session = this.factory.getObject().getCurrentSession();
        CriteriaBuilder b = session.getCriteriaBuilder();
        CriteriaQuery<Providers> q = b.createQuery(Providers.class);
        Root<Providers> root = q.from(Providers.class);
        q.select(root);
        root.fetch("userId");

        Predicate approvedPredicate = b.equal(root.get("isApproved"), isApproved);
        q.where(approvedPredicate);
        q.orderBy(b.desc(root.get("userId").get("createdAt")));
        Query<Providers> query = session.createQuery(q);

        if (params != null) {
            int pageSize = this.env.getProperty("providers.page_size", Integer.class, 20);
            int page = Integer.parseInt(params.getOrDefault("page", "1"));

            // Công thức Offset, page 1 lấy từ dòng 0, page 2 từ 20
            int start = (page - 1) * pageSize;

            query.setMaxResults(pageSize); // GánLIMIT cho MySQL
            query.setFirstResult(start); // Gán OFFSET
        }

        return query.getResultList();
    }

    @Override
    public Long countProvidersByStatus(boolean isApproved) {
        Session session = this.factory.getObject().getCurrentSession();
        CriteriaBuilder b = session.getCriteriaBuilder();
        CriteriaQuery<Long> q = b.createQuery(Long.class);
        Root<Providers> root = q.from(Providers.class);

        q.select(b.count(root));
        q.where(b.equal(root.get("isApproved"), isApproved));
        Query<Long> query = session.createQuery(q);
        return query.uniqueResult();
    }

    @Override
    public List<Providers> getProviders(Map<String, String> params) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from                                                                  // nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

}