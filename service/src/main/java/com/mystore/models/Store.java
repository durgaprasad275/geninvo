package com.mystore.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="store")
public class Store {

	
	@Id
	@GeneratedValue
	private long id;
	
	@Column(name="strnm")
	private String storeName;
	
	@Column(name="strlat")
	private String storeLatitude;
	
	@Column(name="strlong")
	private String storeLongitude;
	
	@Column(name="strctg")
	private String category;

	@ManyToOne
	@JoinColumn(name="user_id",nullable=false)
	private User user;
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getStoreName() {
		return storeName;
	}

	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}

	public String getStoreLatitude() {
		return storeLatitude;
	}

	public void setStoreLatitude(String storeLatitude) {
		this.storeLatitude = storeLatitude;
	}

	public String getStoreLongitude() {
		return storeLongitude;
	}

	public void setStoreLongitude(String storeLongitude) {
		this.storeLongitude = storeLongitude;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
}
