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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;

import com.nomication.Models.Deck;
import com.nomication.Models.Setting;
import com.nomication.Services.SettingServices;
import com.nomication.Services.DeckServices;
import com.nomication.Services.UserServices;
import com.nomication.Services.CardServices;
import com.nomication.Models.User;


@RestController
public class DeckController {
	@Autowired
	DeckServices deckServices;

	@Autowired
	UserServices userService;

	@Autowired
	SettingServices settingService;

	@Autowired
	CardServices cardService;


	@RequestMapping(value="/deck", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<Object> CreateDeck(@RequestBody Deck targetDeck, HttpServletRequest httpServletRequest)
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

				if (targetDeck.getName().equals("")) 
				{
					hasError = true;
				}
				if (hasError == false)
				{
					Setting settings = new Setting();
					//settings.setDeckId(deck.getId());
				//	settings.setDeckId(deck.get());
					settings.setCardsPerDay(5);
					settings.setTimer(10);
					settings.setRandomize(false);
					settings.setDelay1(10);
					settings.setDelay2(60*60*24);
					settings.setDelay3(60*60*24*5);
					settings.setDelay4(60*60*24*10);
					settings.setDelay5(60*60*24*15);

	
					User foundUser = userService.findUserByUsername(currentUser.getUsername());
					Deck deck = new Deck();
					deck.setName(targetDeck.getName());
					//deck.setUser(foundUser);
					deck.setSetting(settings);
					deck.setUserId(foundUser.getId());
					userService.merge(foundUser);

					deckServices.save(deck);
					settings.setDeck(deck);
					settingService.save(settings);
				


					result.put("decks",deckServices.getAllDecksByUserId(currentUser.getId()));
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

	@RequestMapping(value="/decks", method = RequestMethod.GET )
	public ResponseEntity<Object> getAllDecks(HttpServletRequest httpServletRequest)
	{

		ArrayList<HashMap<String,Object>> session = (ArrayList<HashMap<String,Object>>) httpServletRequest.getSession().getAttribute("SPRING_BOOT_SESSION_MESSAGES");
		HashMap<String, Object> result =  new HashMap<String, Object>();

		if (session != null)
		{
			HashMap<String, Object> sessionHashMap = session.get(0);
			User currentUser = (User) sessionHashMap.get("user");

			return ResponseEntity.status(HttpStatus.OK).body(deckServices.getAllDecksByUserId(currentUser.getId()));
		} else {
			result.put("error","no session found!");
		}


		return ResponseEntity.status(HttpStatus.OK).body(result);
	}

	@RequestMapping(value="/deck", method = RequestMethod.DELETE)
	public ResponseEntity<Object> DeleteDeck(@RequestBody Deck deckToDelete,HttpServletRequest httpServletRequest)
	{
		ArrayList<HashMap<String,Object>> session = (ArrayList<HashMap<String,Object>>) httpServletRequest.getSession().getAttribute("SPRING_BOOT_SESSION_MESSAGES");
		HashMap<String, Object> result =  new HashMap<String, Object>();

		if (session != null)
		{
			HashMap<String, Object> sessionHashMap = session.get(0);
			User currentUser = (User) sessionHashMap.get("user");

			Deck deckToDel = deckServices.GetDeckById(deckToDelete.getId());
			if (deckToDel != null)
			{
				if (deckToDel.getUserId() == currentUser.getId())
				{
					//settingService.deleteSettingsFromDeck(deckToDel.getId());
					//cardService.deleteAllCardsFromDeck(deckToDel.getId());
					deckServices.delete(deckToDel);
				}
			}

			return ResponseEntity.status(HttpStatus.OK).body(deckServices.getAllDecksByUserId(currentUser.getId()));
		} else {
			result.put("error","no session found!");
		}


		return ResponseEntity.status(HttpStatus.OK).body(result);

	}

}
