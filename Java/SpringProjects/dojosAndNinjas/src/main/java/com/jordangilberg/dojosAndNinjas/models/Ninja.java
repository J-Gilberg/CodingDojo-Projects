package com.jordangilberg.dojosAndNinjas.models;


import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;
@Entity
@Table(name="ninja")
public class Ninja {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	@NotNull
    @Size(min = 2, max = 40, message="First Name must be between 2-40 characters.")
    private String first_name;
    @NotNull
    @Size(min = 2, max = 40, message="Last Name must be between 2-40 characters.")
    private String last_name;
    @NotNull
    @Min(16)
    @Max(200)
    private int age;
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="dojo_id")
    private Dojo dojo;
    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
    public Ninja() {}
    public Ninja(String firstName, String lastName, int age, Dojo dojo) {
        this.first_name = firstName;
        this.last_name = lastName;
        this.age = age;
        this.dojo = dojo;
    }
    
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	@PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public Dojo getDojo() {
		return dojo;
	}
	public void setDojo(Dojo dojo) {
		this.dojo = dojo;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
    
    
}