package com.nomication.Models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;
import javax.persistence.ManyToOne;
import com.nomication.Models.Setting;
import javax.persistence.OneToOne;
import javax.persistence.JoinColumn;

@Entity
public class Card {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	//private int deckId;
	private String front;
	private String back;
	private Timestamp dueDate;
	private int quality;
	private int interval;
	private float easeFactor;
	private int repetitions;


	@ManyToOne
	@JoinColumn(name = "deck_id")
	private Deck deck;

	public void setDeck(Deck deck)
	{
		this.deck = deck;
	}

	public Deck getDeck()
	{
		return deck;
	}
	
	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public void setQuality(int quality)
	{
		this.quality = quality;
	}

	public int getQuality()
	{
		return quality;
	}

	public void setInterval(int interval)
	{
		this.interval = interval;
	}

	public int getInterval()
	{
		return interval;
	}

	public void setEaseFactor(float easeFactor)
	{
		this.easeFactor= easeFactor;
	}

	public float getEaseFactor()
	{
		return easeFactor;
	}

	public void setRepetitions(int repetitions)
	{
		this.repetitions = repetitions;
	}

	public int getRepetitions()
	{
		return repetitions;
	}
/*
	public int getDeckId()
	{
		return deckId;
	}

	public void setDeckId(int deckId)
	{
		this.deckId = deckId;
	}
	*/

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
	
	public void setDueDate(Timestamp dueDate)
	{
		this.dueDate = dueDate;
	}

}
