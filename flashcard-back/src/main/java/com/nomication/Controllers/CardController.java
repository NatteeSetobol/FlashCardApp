package com.nomication.Controllers;

import java.util.HashMap;
import java.util.ArrayList;
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
import com.nomication.Services.CardServices;
import com.nomication.Services.UserServices;


@RestController
public class CardController {
	@Autowired
	CardServices cardServices;

	@Autowired
	UserServices userService;

	@RequestMapping(value="/card", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<Object> CreateDeck(@RequestBody Card targetCard, HttpServletRequest httpServletRequest)
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
					User foundUser = userService.findUserByUsername(currentUser.getUsername());

					Card card = new Card();
					card.setDeck(targetCard.getDeckId());
					card.setFront(targetCard.getFront());
					card.setBack(targetCard.getBack());
					cardServices.save(card);
					result.put("cards",cardServices.getAllCardsFromDeckById(targetCard.getDeckId()));
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
}
	
