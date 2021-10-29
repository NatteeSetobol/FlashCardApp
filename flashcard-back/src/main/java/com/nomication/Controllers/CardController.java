package com.nomication.Controllers;

import java.util.HashMap;
import java.util.ArrayList;
import java.util.Date;
import java.sql.Timestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import javax.servlet.http.HttpServletRequest;

import com.nomication.Models.User;
import com.nomication.Models.Card;
import com.nomication.Models.Deck;
import com.nomication.Services.CardServices;
import com.nomication.Services.UserServices;
import com.nomication.Services.DeckServices;


@RestController
public class CardController {
	@Autowired
	CardServices cardServices;

	@Autowired
	UserServices userService;

	@Autowired
	DeckServices deckService;

	@RequestMapping(value="/card", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<Object> CreateCard(@RequestBody HashMap<String, Object> targetCard, HttpServletRequest httpServletRequest)
	{
		HashMap<String, Object> result =  new HashMap<String, Object>();
		boolean hasError = false;

		@SuppressWarnings("unchecked")
		ArrayList<HashMap<String,Object>>  session = (ArrayList<HashMap<String,Object>>) httpServletRequest.getSession().getAttribute("SPRING_BOOT_SESSION_MESSAGES");
		if (session != null)
		{
			if (session.size() > 0)
			{
				HashMap<String, Object> sessionHashMap = session.get(0);
			
				User currentUser = (User) sessionHashMap.get("user");
				// TODO(): Do field checks for card!
				if (hasError == false)
				{
					Date todaysDate;
					Timestamp timestamp;
					User foundUser = userService.findUserByUsername(currentUser.getUsername());

					int deckId = (int) targetCard.get("deckId");
					String cardFront = (String) targetCard.get("front");
					String cardBack = (String) targetCard.get("back");

					Deck deck = deckService.GetDeckById(deckId);

					Card card = new Card();
					
					todaysDate = new Date();
					timestamp = new Timestamp(todaysDate.getTime());

				//	card.setDeckId(deckId);
					card.setDueDate(timestamp);
					card.setFront(cardFront);
					card.setBack(cardBack);
					card.setDeck(deck);
					card.setEaseFactor(2.5f);
					cardServices.save(card);
					result.put("cards",cardServices.getAllCardsFromDeckById(deckId));
				} else {
					result.put("error","Deck name can not be blank!");
				}

			} else {
				result.put("error","no sessions found!");
			}
		} else {
				result.put("error","no session found!");
		}

		return ResponseEntity.status(HttpStatus.OK).body(result);
	
	}

	@RequestMapping(value="/card", method = RequestMethod.PATCH, consumes = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<Object> submitCard(@RequestBody HashMap<String, Object> targetCard, HttpServletRequest httpServletRequest)
	{
		HashMap<String, Object> result =  new HashMap<String, Object>();
		boolean hasError = false;

		@SuppressWarnings("unchecked")
		ArrayList<HashMap<String,Object>>  session = (ArrayList<HashMap<String,Object>>) httpServletRequest.getSession().getAttribute("SPRING_BOOT_SESSION_MESSAGES");
		if (session != null)
		{
			if (session.size() > 0)
			{
				HashMap<String, Object> sessionHashMap = session.get(0);
			
				User currentUser = (User) sessionHashMap.get("user");
			}
		}

		return ResponseEntity.status(HttpStatus.OK).body(result);
	}


	@RequestMapping(value="/cards/{id}", method = RequestMethod.GET )
	public ResponseEntity<Object> getAllCards(@PathVariable("id") int deckId,HttpServletRequest httpServletRequest)
	{
		ArrayList<HashMap<String,Object>> session = (ArrayList<HashMap<String,Object>>) httpServletRequest.getSession().getAttribute("SPRING_BOOT_SESSION_MESSAGES");
		HashMap<String, Object> result =  new HashMap<String, Object>();

		if (session != null)
		{
			HashMap<String, Object> sessionHashMap = session.get(0);
			User currentUser = (User) sessionHashMap.get("user");

			return ResponseEntity.status(HttpStatus.OK).body(cardServices.getAllCardsFromDeckById(deckId));
		} else {
			result.put("error","no session found!");
		}


		return ResponseEntity.status(HttpStatus.OK).body(result);
	}

	@RequestMapping(value="/cards/{id}/due", method = RequestMethod.GET )
	public ResponseEntity<Object> getAllDueCards(@PathVariable("id") int deckId,HttpServletRequest httpServletRequest)
	{
		ArrayList<HashMap<String,Object>> session = (ArrayList<HashMap<String,Object>>) httpServletRequest.getSession().getAttribute("SPRING_BOOT_SESSION_MESSAGES");
		HashMap<String, Object> result =  new HashMap<String, Object>();
		Date todaysDate;
		Timestamp timestamp;

		if (session != null)
		{
			HashMap<String, Object> sessionHashMap = session.get(0);
			User currentUser = (User) sessionHashMap.get("user");

			todaysDate = new Date();
			timestamp = new Timestamp(todaysDate.getTime());

			return ResponseEntity.status(HttpStatus.OK).body(cardServices.findAllCardsByDueDate(deckId, timestamp));
		} else {
			result.put("error","no session found!");
		}


		return ResponseEntity.status(HttpStatus.OK).body(result);
	}




	@RequestMapping(value="/card", method = RequestMethod.PUT, consumes = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<Object> EditCard(@RequestBody Card targetCard, HttpServletRequest httpServletRequest)
	{
		HashMap<String, Object> result =  new HashMap<String, Object>();
		ArrayList<HashMap<String,Object>> session = (ArrayList<HashMap<String,Object>>) httpServletRequest.getSession().getAttribute("SPRING_BOOT_SESSION_MESSAGES");

		if (session != null)
		{
			HashMap<String, Object> sessionHashMap = session.get(0);
			User currentUser = (User) sessionHashMap.get("user");
			//TODO(): Make sure the card that belongs to the deck the user created.
			ArrayList<Card> cards = cardServices.getCardsById(targetCard.getId());

			if (cards.size() > 0)
			{
				Card card = cards.get(0);
				card.setFront(targetCard.getFront());
				card.setBack(targetCard.getBack());
				cardServices.save(card);
			

				return ResponseEntity.status(HttpStatus.OK).body(cardServices.getAllCardsFromDeckById(card.getDeck().getId()));
			}

			return ResponseEntity.status(HttpStatus.OK).body(result);
		} else {
			result.put("error","no session found!");
		}


		return ResponseEntity.status(HttpStatus.OK).body(result);
	}

	@RequestMapping(value="/card", method = RequestMethod.DELETE)
	public ResponseEntity<Object> DeleteCard(@RequestBody Card targetCard, HttpServletRequest httpServletRequest)
	{
		HashMap<String, Object> result =  new HashMap<String, Object>();
		ArrayList<HashMap<String,Object>> session = (ArrayList<HashMap<String,Object>>) httpServletRequest.getSession().getAttribute("SPRING_BOOT_SESSION_MESSAGES");

		if (session != null)
		{
			HashMap<String, Object> sessionHashMap = session.get(0);
			User currentUser = (User) sessionHashMap.get("user");
			//TODO(): Make sure the card that belongs to the deck the user created.
			ArrayList<Card> cards = cardServices.getCardsById(targetCard.getId());


			if (cards.size() > 0)
			{
				Card card = cards.get(0);

				cardServices.delete(card);

				return ResponseEntity.status(HttpStatus.OK).body(cardServices.getAllCardsFromDeckById(card.getDeck().getId()));
			}

		} else {
			result.put("error","no session found!");
		}


		return ResponseEntity.status(HttpStatus.OK).body(result);

	}
}

	
