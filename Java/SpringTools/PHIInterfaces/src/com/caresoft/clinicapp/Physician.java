package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements PHICompliantUser,PHIAdminCompliant{

	public Physician() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public boolean assignPin(int pin) {
		if(pin > 99999) {
			return false;
		}
		this.setPin(pin);
		return true;
	}
	
	@Override
	public boolean isAuthorized(Integer confirmedAuthID) {
		if(confirmedAuthID == this.id) {
			return true;
		}
		authIncident();
		return false;
	}

	@Override
	public ArrayList<String> reportSecurityIncidents() {
		// TODO Auto-generated method stub
		return null;
	}
	
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }

}
