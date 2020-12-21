package com.mystore.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mystore.models.Store;
import com.mystore.payload.request.StoreRequest;
import com.mystore.services.StoreServiceImpl;

@RestController
@RequestMapping(name = "store")
public class StoreController {

	@Autowired
	StoreServiceImpl storeService;

	@GetMapping("{username}")
	public List<Store> getStores(@RequestParam String username) {
		return null;

	}
	
	@PostMapping(name = "add")
	public String saveStore(@Valid @RequestBody StoreRequest storeRequest) {
		storeService.saveStore(storeRequest);
		return "Store added successfully..";

	}
}
