package com.animals;

public class Bat extends Mammal{

	public Bat(String name) {
		super(name);
		this.setEnergyLevel(300);
	}
	
	public void fly() {
		System.out.println(String.format("%s is flying. watch out!",this.getName()));
		this.changeEnergy(-50);
	}
	
	public void eatHumans() {
		System.out.println(String.format("%s: nom nom nom nom nom nom!!! brup!",this.getName()));
		this.changeEnergy(25);	
	}
	
	public void attackTown() {
		System.out.println(String.format("Look out below!!! roar!!!"));
		this.changeEnergy(-100);	
	}
} 