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

import com.nomication.Models.Deck;
import com.nomication.Models.Setting;
import com.nomication.Models.User;

import com.nomication.Services.DeckServices;
import com.nomication.Services.UserServices;
import com.nomication.Services.SettingServices;

@RestController
public class SettingController {
	@Autowired
	SettingServices settingServices;

	@Autowired
	DeckServices deckServices;

	@RequestMapping(value="/decksettings/{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> getSettings(@PathVariable("id") int deckId, HttpServletRequest httpServletRequest)
	{
		ArrayList<HashMap<String,Object>> session = (ArrayList<HashMap<String,Object>>) httpServletRequest.getSession().getAttribute("SPRING_BOOT_SESSION_MESSAGES");
		HashMap<String, Object> result =  new HashMap<String, Object>();

		if (session != null)
		{
			HashMap<String, Object> sessionHashMap = session.get(0);
			User currentUser = (User) sessionHashMap.get("user");

			Deck deckToDel = deckServices.GetDeckById(deckId);

			if (deckToDel != null)
			{
				if (deckToDel.getUserId() == currentUser.getId())
				{

					return ResponseEntity.status(HttpStatus.OK).body(settingServices.getSettingByDeckId(deckId)  );
				}
			}

		} else {
			result.put("error","no session found!");
		}

		return ResponseEntity.status(HttpStatus.OK).body(result);

	}


	@RequestMapping(value="/decksettings", method=RequestMethod.PUT,consumes = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<Object> saveDeckSettings(@RequestBody  HashMap<String, Object> newSetting, HttpServletRequest httpServletRequest)
	{
		boolean hasError = false;

		@SuppressWarnings("unchecked")
		ArrayList<HashMap<String,Object>> session = (ArrayList<HashMap<String,Object>>) httpServletRequest.getSession().getAttribute("SPRING_BOOT_SESSION_MESSAGES");
		HashMap<String, Object> result =  new HashMap<String, Object>();

		if (session != null)
		{
			if (session.size() > 0)
			{
				HashMap<String, Object> sessionHashMap = session.get(0);
			
				User currentUser = (User) sessionHashMap.get("user");
				if (hasError == false)
				{
					Deck settingsDeck = deckServices.GetDeckById( (int) newSetting.get("deckid"));

					if (settingsDeck.getUserId() == currentUser.getId())
					{
						Setting settings = settingServices.getSettingByDeckId(settingsDeck.getId());

						String timerString = (String) newSetting.get("Timer");
						int timer = Integer.parseInt(timerString);

						String cardsPerValue = (String) newSetting.get("cardsPerDats");
						int cardsPdays =  Integer.parseInt(cardsPerValue);

						settings.setTimer(timer);
						settings.setRandomize( (boolean)newSetting.get("randomValue"));
						settings.setCardsPerDay(cardsPdays);
						settings.setDelay1((int) newSetting.get("delay1"));
						settings.setDelay2((int) newSetting.get("delay2"));
						settings.setDelay3((int) newSetting.get("delay3"));
						settings.setDelay4((int) newSetting.get("delay4"));
						settings.setDelay5((int) newSetting.get("delay5"));
						settingServices.save(settings);



						result.put("status","ok");
					} else {
						result.put("error","This user does not own this deck");
					}
				} else {
					result.put("error","Deck name can not be blank!");
				}

			} else {
			}
		}

		return ResponseEntity.status(HttpStatus.OK).body(result);

	}


}
