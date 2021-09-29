package com.nomication.Models;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.FetchType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Setting
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int deckId;
	private int cardsPerDay;
	private int timer;
	private boolean randomize;
	private int delay1;
	private int delay2;
	private int delay3;
	private int delay4;
	private int delay5;

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

	public void setDeckId(int deckId)
	{
		this.deckId = deckId;
	}

	public int getCardsPerDay()
	{
		return cardsPerDay;
	}

	public void setCardsPerDay(int cardsPerDay)
	{
		this.cardsPerDay = cardsPerDay;
	}

	public int getTimer()
	{
		return timer;
	}

	public void setTimer(int timer)
	{
		this.timer = timer;
	}

	public boolean getRandomize()
	{
		return randomize;
	}

	public void setRandomize(boolean randomize)
	{
		this.randomize = randomize;
	}

	public int getDelay1()
	{
		return delay1;
	}

	public void setDelay1(int delay1)
	{
		this.delay1 = delay1;
	}

	public int getDelay2()
	{
		return delay2;
	}

	public void setDelay2(int delay2)
	{
		this.delay2 = delay2;
	}

	public int getDelay3()
	{
		return delay3;
	}

	public void setDelay3(int delay3)
	{
		this.delay3 = delay3;
	}

	public int getDelay4()
	{
		return delay4;
	}

	public void setDelay4(int delay4)
	{
		this.delay4 = delay4;
	}

	public int getDelay5()
	{
		return delay5;
	}

	public void setDelay5(int delay5)
	{
		this.delay5 = delay5;
	}

}
