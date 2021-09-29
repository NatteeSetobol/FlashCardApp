package com.nomication.Services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nomication.Models.Deck;
import com.nomication.repos.DeckRepo;
import com.sun.xml.bind.v2.runtime.unmarshaller.XsiNilLoader.Array;

@Service
public class DeckServices {
	@Autowired
	DeckRepo deckRepo;

	public void save(Deck deck)
	{
		deckRepo.save(deck);
	}

	public ArrayList<Deck> getAllDecksByUserId(int userId)
	{
		return deckRepo.findAllDeckByUserId(userId);
	}

	public void delete(Deck deck)
	{
		deckRepo.delete(deck);
	}

	public Deck GetDeckById(int id)
	{
		ArrayList<Deck> foundDecks = deckRepo.GetDeckById(id);
		Deck foundDeck = null;

		if (foundDecks.size() > 0)
		{
			foundDeck = foundDecks.get(0);
		}

		return foundDeck;
	}
}
