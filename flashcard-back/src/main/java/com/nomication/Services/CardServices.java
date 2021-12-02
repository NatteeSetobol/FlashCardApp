package com.nomication.Services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nomication.Models.Card;
import com.nomication.repos.CardRepo;
import com.sun.xml.bind.v2.runtime.unmarshaller.XsiNilLoader.Array;
import java.sql.Timestamp;

@Service
public class CardServices {
	@Autowired
	CardRepo cardRepo;

	public void save(Card card)
	{
		cardRepo.save(card);
	}

	public void delete(Card card)
	{
		cardRepo.delete(card);
	}

	public ArrayList<Card> getAllCardsFromDeckById(int deckId)
	{
		return cardRepo.findAllCardsByDeckId(deckId);
	}
	public ArrayList<Card> getCardsById(int id)
	{
		return cardRepo.findCardsById(id);
	}

	public void deleteAllCardsFromDeck(int deck_id)
	{
		cardRepo.deleteAllCardsFromDeck(deck_id);
	}

	public ArrayList<Card> findAllCardsByDueDate(int deck_id, Timestamp timestamp)
	{
		return cardRepo.findAllCardsByDueDate(deck_id, timestamp);
	}
}
