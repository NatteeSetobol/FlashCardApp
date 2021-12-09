package com.nomication.Models;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.FetchType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.*;
import com.nomication.Models.Deck;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String username;
	private String password;

	/*
	@OneToMany(targetEntity=Deck.class,mappedBy="deckUser",cascade=CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonManagedReference
	
	private List<Deck> decks;

	public List<Deck> getDecks() {
		return this.decks;
	}

	public void  setDeck(List<Deck> decks) {
		this.decks = decks;
	}
	*/
	
	public User(String username, String password)
	{
		this.username = username;
		this.password = password;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
}
