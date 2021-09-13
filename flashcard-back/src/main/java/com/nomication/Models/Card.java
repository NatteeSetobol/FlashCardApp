package com.nomication.Models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Timestamp;
import javax.persistence.ManyToOne;

@Entity
public class Card {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int deckId;
	private String front;
	private String back;
	private Timestamp dueDate;

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public int getDeckId()
	{
		return deckId;
	}

	public void setDeck(int deckId)
	{
		this.deckId = deckId;
	}

	public String getFront()
	{
		return this.front;
	}
	
	public void setFront(String front)
	{
		this.front = front;
	}

	public String getBack()
	{
		return this.back;
	}
	
	public void setBack(String back)
	{
		this.back = back;
	}

	public Timestamp getDueData()
	{
		return this.dueDate;
	}
	
	public void setDueData(Timestamp dueDate)
	{
		this.dueDate = dueDate;
	}

}
