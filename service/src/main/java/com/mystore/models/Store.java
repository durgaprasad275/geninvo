package com.mystore.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;

@Entity
@Table(name="store")
public class Store {

	@GeneratedValue
	private long id;
	
	@Column(name="strnm")
	private String storeName;
	
	private String storeLatitude;
	
	private String storeLongitude;
}
