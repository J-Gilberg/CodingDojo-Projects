package com.caresoft.clinicapp;

import java.util.Random;

public class Patient implements PHICompliantUser{
	private int pin;
	public Patient() {
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public boolean isAuthorized(Integer confirmedAuthID) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean assignPin(int pin) {
		if(pin == 1234 || pin == 4321 ) {
			return false;
		}
		if(pin > 9999) {
			return false;
		}
		this.setPin(pin);
		return true;
	}

	public int getPin() {
		return pin;
	}

	public void setPin(int pin) {
		this.pin = pin;
	}

}
