package com.mystore.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mystore.models.Store;
import com.mystore.models.User;
import com.mystore.payload.request.StoreRequest;
import com.mystore.repository.StoreRepository;
import com.mystore.repository.UserRepository;

@Service
public class StoreServiceImpl {

	@Autowired
	UserRepository userRepository;

	@Autowired
	StoreRepository storeRepository;

	@Transactional
	public void saveStore(StoreRequest storeRequest) {
		User user = userRepository.findByUsername(storeRequest.getUsername())
				.orElseThrow(
						() -> new UsernameNotFoundException(
								"User Not Found with username: "
										+ storeRequest.getUsername()));
		Store store = new Store();
		store.setUser(user);
		store.setStoreName(storeRequest.getStorename());
		store.setCategory(storeRequest.getCategory());
		store.setStoreLatitude(storeRequest.getLatitude());
		store.setStoreLongitude(storeRequest.getLongitude());
		storeRepository.save(store);

	}
}
