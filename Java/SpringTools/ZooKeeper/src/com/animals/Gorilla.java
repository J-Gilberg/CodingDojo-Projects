package com.animals;

public class Gorilla extends Mammal{

	public Gorilla(String name) {
		super(name);
	}
	
	public void throwSomething(){
		System.out.println(String.format("%s just threw something",super.getName()));
		super.changeEnergy((-5));
	}
	
	public void eatBananas(){
		System.out.println(String.format("%s just are a banana",super.getName()));
		super.changeEnergy(10);
	}
	
	public void climb(){
		System.out.println(String.format("%s is climbing",super.getName()));
		super.changeEnergy((-10));
	}
}
