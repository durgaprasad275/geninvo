package com.mystore.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mystore.models.Store;

@Transactional
public interface StoreRepository extends JpaRepository<Store, Long> {
	List<Store> findAllByUserId(long id);
	
}
