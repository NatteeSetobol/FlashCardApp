package com.nomication.Models;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.*;
import javax.persistence.Id;
import java.sql.Timestamp;
import javax.persistence.OneToOne;
import javax.persistence.JoinColumn;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.nomication.Models.User;
import javax.persistence.FetchType;

@Entity
public class Deck {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int userId;
	private String name;
	private Timestamp dueDate;
	private int totalCards;
	private int totalStudied;
	/*
	//@ManyToOne
	//@JoinColumn(name="user_id")
	//@JsonBackReference 
	private User deckUser;
	public User getUser()
	{
		return  this.deckUser;
	}

	public void setUser(User deckUser)
	{
		this.deckUser = deckUser;
	}
	*/

	@OneToOne(cascade = CascadeType.ALL)
	@JoinTable(name = "deck_setting", 
				joinColumns = { @JoinColumn(name = "setting_id")  },
				inverseJoinColumns = { @JoinColumn(name = "deck_id") }
	)
	private Setting setting;

	public void setSetting(Setting setting)
	{
		this.setting = setting;
	}

	

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY,mappedBy = "deck")
	//@JoinColumn(name = "deck_id")
	private List<Card> cards = new ArrayList<Card>();

	public int getTotalStudied() {
		return totalStudied;
	}

	public void setTotalStudied(int totalStudied) {
		this.totalStudied = totalStudied;
	}

	public int getTotalCards() {
		return totalCards;
	}

	public void setTotalCards(int totalCards) {
		this.totalCards = totalCards;
	}
	
	public Timestamp getDueDate() {
		return dueDate;
	}
	public void setTimestamp(Timestamp dueDate) {
		this.dueDate = dueDate;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public int getUserId() {
		return userId;
	}
	
	public void setUserId(int userId) {
		this.userId = userId;
	}

}
