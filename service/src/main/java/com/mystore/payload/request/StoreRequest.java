package com.mystore.payload.request;

import javax.validation.constraints.NotBlank;

public class StoreRequest {
	
	@NotBlank
	private String username;

	@NotBlank
	private String storename;

	@NotBlank
	private String category;

	@NotBlank
	private String latitude;

	@NotBlank
	private String longitude;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getStorename() {
		return storename;
	}

	public void setStorename(String storename) {
		this.storename = storename;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

}
