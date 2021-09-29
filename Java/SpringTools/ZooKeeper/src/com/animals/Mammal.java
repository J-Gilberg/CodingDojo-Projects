package com.animals;

public class Mammal {
	
	private String name;
	private double energyLevel = 0;
	
	public Mammal(String name) {
		this.energyLevel = 100;
		this.name = name;
	}

	public double displayEnergy() {
		System.out.println(String.format("%s's Energy Level: %f",this.name,this.energyLevel));
		return energyLevel;
	}
	
	public void changeEnergy(double num) {
		this.energyLevel = num + this.getEnergyLevel();
	}
	
	public double getEnergyLevel() {
		return energyLevel;
	}

	public String getName(){
		return this.name;
	}
	
	public void setEnergyLevel(double num){
		this.energyLevel = num;
	}
	

}
