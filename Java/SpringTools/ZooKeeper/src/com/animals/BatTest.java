package com.animals;

public class BatTest {

	public static void main(String[] args) {
		Bat bat = new Bat("Tim");
		
		bat.fly();
		bat.attackTown();
		bat.eatHumans();
		bat.attackTown();
		bat.eatHumans();
		bat.attackTown();
		bat.fly();
		bat.displayEnergy();
	}
}
